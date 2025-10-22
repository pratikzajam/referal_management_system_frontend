import { createContext, useState, useEffect, useContext } from "react";
import axios from 'axios';
import { toast } from "react-toastify";

export let CandidateContext = createContext();

export const useCandidate = () => useContext(CandidateContext);

export let CandidateProvider = ({ children }) => {

    const [metrics, setMetrics] = useState([]);
    const [loading, setLoading] = useState(false);

    const storedUser = localStorage.getItem('user');
    const user = storedUser ? JSON.parse(storedUser) : null;

    console.log(user);

    let getmetricsData = async () => {
        try {
            if (!user) {
                return null;
            }

            let response = await axios.get(
                `${import.meta.env.VITE_API_URL}/api/matrics/getReferedCandidates/${user._id}`,
                {
                    withCredentials: true,
                }
            );

            console.log("data", response.data);
            setMetrics(response.data);

        } catch (error) {
            console.log(error);
        }
    };

    let deleteCandidate = async (id) => {
        try {
            setLoading(true);
            let response = await axios.delete(
                `${import.meta.env.VITE_API_URL}/api/candidate/candidates/${id}`, {
                withCredentials: true
            }
            );

            console.log(response.data);
            toast(response.data.message);
            getmetricsData();
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };


    let updateCandidateStatus = async (status, id) => {
        try {
            let response = await axios.put(`${import.meta.env.VITE_API_URL}/api/candidate/candidates/${id}`,
                { status: status },
                {
                    withCredentials: true
                }
            );

            console.log(response.data);
            toast(response.data.message);

            setTimeout(() => {
                getmetricsData();
            }, 1000)


        } catch (error) {
            console.log(error);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }


    let addReferal = async (formData) => {
        try {
            console.log("hii");
            console.log(formData);

            // Create a FormData object
            const data = new FormData();
            data.append("candidateName", formData.name);
            data.append("email", formData.email);
            data.append("phoneNumber", formData.phone);
            data.append("jobTitle", formData.jobTitle);
            data.append("resume", formData.resume);

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

            console.log(response.data,"response");

            if (response.data.status) {
                toast.success(response.data.message);
                getmetricsData()
            } else {
                toast.error(response.data.message)
            }

            return response.data.status
        } catch (error) {

            console.log(error)
            console.log(error.response.data.message);
            toast.error(error.response.data.message);
        }
    };





    useEffect(() => {
        if (user && user._id) {
            getmetricsData();
        }

    }, []);

    return (
        <CandidateContext.Provider value={{ metrics, deleteCandidate, updateCandidateStatus, addReferal }}>
            {children}
        </CandidateContext.Provider>
    );
};