import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import Home from "./pages/home/Home";
import UniqueNamesCreatorApp from "./pages/apps/UNC/UniqueNamesCreatorApp";
import UniqueNamesCreatorPrivacy from "./pages/privacy/UNC/UniqueNamesCreatorPrivacy";

function App() {
    return (
        <Router>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/privacy/UniqueNamesCreator" element={<UniqueNamesCreatorPrivacy />} />
                <Route path="/app/UniqueNamesCreator" element={<UniqueNamesCreatorApp />} />
            </Routes>

            <Footer />
        </Router>
    );
}

export default App;