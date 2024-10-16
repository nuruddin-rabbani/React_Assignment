import { BrowserRouter, Route, Routes } from "react-router-dom";
import Activities from "./components/sections/Activities";
import Dashboard from "./components/sections/Dashboard";
import Documents from "./components/sections/Documents";
import Incidents from "./components/sections/Incidents";
import Locations from "./components/sections/Locations";
import Navbar from "./components/sections/Navbar";
import CypherAi from "./components/sections/CypherAi";
import NotFound from "./components/sections/NotFound";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/incidents" element={<Incidents />} />
                <Route path="/locations" element={<Locations />} />
                <Route path="/activities" element={<Activities />} />
                <Route path="/documents" element={<Documents />} />
                <Route path="/cypherAi" element={<CypherAi />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

// <Navbar />
//             <Dashboard />

export default App;
