import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
function App() {
    return (
        <>
            <nav>
                <Link to="/">Home</Link> | <Link to="/about">About</Link>| <Link to="/login">Login</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NotFound />}></Route>// trang 404
            </Routes>
        </>
    );
}
export default App;