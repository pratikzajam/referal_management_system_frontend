import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './Context/AuthContext.jsx';
import { CandidateProvider } from './Context/CandidateContext.jsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <CandidateProvider>
        <App />
      </CandidateProvider>
    </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
