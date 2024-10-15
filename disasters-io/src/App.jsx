import Container from "./components/common/Container";
import Dashboard from "./components/sections/Dashboard";
import Navbar from "./components/sections/Navbar";
function App() {
    return (
        <main className="font-onest w-full">
            <Navbar />
            <Dashboard />
        </main>
    );
}

export default App;
