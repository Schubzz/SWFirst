import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PWABadge from './PWABadge.tsx';
import './App.css';
import SW from "./Pages/SW.tsx";
import PWA from "./Pages/PWA.tsx";
import ScrollToTop from './Components/ScrollToTop.tsx';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<SW />} />
                <Route path="/pwa" element={<PWA />} />
            </Routes>

            <PWABadge />
        </Router>
    );
}

export default App;
