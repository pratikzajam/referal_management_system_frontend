import { createContext, useState, useEffect, useContext } from "react";
import axios from 'axios';
import { toast } from "react-toastify";
import { useAuth } from "./AuthContext";

export let CandidateContext = createContext();

export const useCandidate = () => useContext(CandidateContext);

export let CandidateProvider = ({ children }) => {

    const [metrics, setMetrics] = useState({ data: { candidates: [], totalCandidates: 0 } });
    const [loading, setLoading] = useState(false);
    
    // ✅ Use user from AuthContext instead of reading localStorage directly
    const { user } = useAuth();

    let getmetricsData = async () => {
        try {
            if (!user || !user._id) {
                console.log("No user found, skipping metrics fetch");
                return null;
            }

            setLoading(true);

            let response = await axios.get(
                `${import.meta.env.VITE_API_URL}/api/matrics/getReferedCandidates/${user._id}`,
                {
                    withCredentials: true,
                }
            );

            console.log("Metrics data received:", response.data);
            setMetrics(response.data);

        } catch (error) {
            console.error("Error fetching metrics:", error);
            toast.error(error.response?.data?.message || "Failed to fetch candidates");
        } finally {
            setLoading(false);
        }
    };

    let deleteCandidate = async (id) => {
        try {
            setLoading(true);
            let response = await axios.delete(
                `${import.meta.env.VITE_API_URL}/api/candidate/candidates/${id}`, 
                {
                    withCredentials: true
                }
            );

            console.log(response.data);
            toast.success(response.data.message);
            
            // ✅ Immediately refetch data
            await getmetricsData();
            
        } catch (error) {
            console.error("Delete error:", error);
            toast.error(error.response?.data?.message || "Failed to delete candidate");
        } finally {
            setLoading(false);
        }
    };

    let updateCandidateStatus = async (status, id) => {
        try {
            setLoading(true);
            
            let response = await axios.put(
                `${import.meta.env.VITE_API_URL}/api/candidate/candidates/${id}`,
                { status: status },
                {
                    withCredentials: true
                }
            );

            console.log(response.data);
            toast.success(response.data.message);

            // ✅ Immediately refetch data instead of setTimeout
            await getmetricsData();

        } catch (error) {
            console.error("Update error:", error);
            toast.error(error.response?.data?.message || "Failed to update candidate");
        } finally {
            setLoading(false);
        }
    }

    let addReferal = async (formData) => {
        try {
            if (!user || !user._id) {
                toast.error("User not authenticated");
                return false;
            }

            setLoading(true);

            // Create FormData object
            const data = new FormData();
            data.append("candidateName", formData.name);
            data.append("email", formData.email);
            data.append("phoneNumber", formData.phone);
            data.append("jobTitle", formData.jobTitle);
            
            // ✅ Only append resume if it exists
            if (formData.resume) {
                data.append("resume", formData.resume);
            }

            let response = await axios.post(
                `${import.meta.env.VITE_API_URL}/api/candidate/candidates/${user._id}`,
                data,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    },
                    withCredentials: true
                }
            );

            console.log("Add referral response:", response.data);

            // ✅ Check response status correctly
            if (response.data.status || response.status === 200 || response.status === 201) {
                toast.success(response.data.message || "Referral added successfully");
                
                // ✅ Immediately refetch data
                await getmetricsData();
                
                return true;
            } else {
                toast.error(response.data.message || "Failed to add referral");
                return false;
            }

        } catch (error) {
            console.error("Add referral error:", error);
            toast.error(error.response?.data?.message || "Failed to add referral");
            return false;
        } finally {
            setLoading(false);
        }
    };

    // ✅ Fetch metrics when user changes or component mounts
    useEffect(() => {
        if (user && user._id) {
            console.log("User found, fetching metrics for:", user._id);
            getmetricsData();
        }
    }, [user]); // ✅ Add user as dependency

    return (
        <CandidateContext.Provider value={{ 
            metrics, 
            deleteCandidate, 
            updateCandidateStatus, 
            addReferal,
            loading,
            refetchMetrics: getmetricsData // ✅ Expose refetch function
        }}>
            {children}
        </CandidateContext.Provider>
    );
};