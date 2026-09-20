import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ReactGA from "react-ga4";

// Replace with your actual Measurement ID
ReactGA.initialize("G-PJ9DV6N55S");

createRoot(document.getElementById("root")!).render(<App />);
