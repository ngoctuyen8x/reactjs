import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Products from "./Products";
import ProductDetail from "./ProductDetail";
import Profile from "./Profile";
import Settings from "./Settings";
import Dashboard from "./Dashboard";
import Users from "./User";
import Posts from "./Posts";
import React, { useState } from "react";

function App() {

    const [token, setToken] = useState(localStorage.getItem("token") || null);

    const handleLogin = async (email, password) => {
        try {
            const response = await fetch("https://dummyjson.com/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: email, // API mẫu yêu cầu 'username' thay vì 'email'
                    password: password,
                }),
            });

            const data = await response.json();
            if (response.ok) {
                localStorage.setItem("token", data.token);
                setToken(data.token);
                alert("Đăng nhập thành công!");
            } else {
                alert("Đăng nhập thất bại! Kiểm tra lại thông tin.");
            }
        } catch (error) {
            console.error("Lỗi:", error);
        }
    };



    return (
        <>
            {/* <nav>
                <Link to="/">Home</Link> | <Link to="/about">About</Link>| <Link to="/login">Login</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NotFound />}></Route>// trang 404
            </Routes> */}

            {/* <Routes>
                <Route path="/" element={<h1>🏠 Trang chủ</h1>} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetail />} />
            </Routes> */}
            <Routes>
                <Route path="/" element={<h1>🏠 Trang chủ</h1>} />

                {/* Nested Routes */}
                <Route path="/" element={!token ? <Login onLogin={handleLogin} /> : <Navigate to="/dashboard" />} />
                <Route
                    path="/dashboard"
                    element={token ? <Dashboard /> : <Navigate to="/" />}
                />
                <Route path="/users" element={<Users />} />
                <Route path="/posts" element={<Posts />} />
            </Routes>
            {/** đây là phần đăng nhập */}

            <div>
                {!token ? (
                    <Login onLogin={handleLogin} />
                ) : (
                    <div className="text-center mt-10">
                        <h1>Chào mừng! Bạn đã đăng nhập thành công.</h1>
                        <button
                            className="bg-red-500 text-white p-2 mt-4 rounded"
                            onClick={() => {
                                localStorage.removeItem("token");
                                setToken(null);
                            }}
                        >
                            Đăng xuất
                        </button>
                    </div>
                )}
            </div>



        </>
    );
}
export default App;