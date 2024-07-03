import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PWABadge from './PWABadge.tsx';
import './App.css';
import SW from "./Pages/SW.tsx";
import PWA from "./Pages/PWA.tsx";
import Skill from "./Pages/Skill.tsx";
import Menu from "./Components/Menu.tsx";

function App() {
    return (
        <Router>
            <div className="relative min-h-screen flex flex-col">
                <div className="absolute inset-0 bg-black opacity-80"></div>
                <div className="relative flex-1 flex flex-col">

                    <Menu />

                    <Routes>
                        <Route path="/" element={<SW />} />
                        <Route path="/pwa" element={<PWA />} />
                        <Route path="/skill" element={<Skill />} />
                    </Routes>

                    <PWABadge />
                </div>
            </div>
        </Router>
    );
}

export default App;
