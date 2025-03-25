// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// function Login() {
//     const [username, setUsername] = useState("");
//     const navigate = useNavigate();//khởi tạo useNavigate
//     const handleLogin = () => {
//         // const userInfo = {
//         //     username: "Jone",
//         //     email: "abc@gmail.com"
//         // }
//         // navigate("/", { state: userInfo });
//         if (username.trim() !== "") {
//             navigate("/", { state: username });
//         }
//         else {
//             alert("vui lòng đăng nhập");
//         }
//     };

//     return (
//         <div style={{ textAlign: "center", marginTop: "50px" }}>
//             <h1>🔑 Trang Đăng Nhập</h1>
//             <input type="text" placeholder="nhập tên đăng nhập"
//                 value={username} onChange={(e) => setUsername(e.target.value)}
//             />

//             <button onClick={handleLogin}>Đăng nhập</button>
//         </div>
//     )
// }
// export default Login



import { useState } from "react";

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        onLogin(email, password);
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
                <h2 className="text-xl font-bold mb-4">Đăng nhập</h2>
                <input
                    type="text"
                    placeholder="Email"
                    className="border p-2 w-full mb-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Mật khẩu"
                    className="border p-2 w-full mb-2"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="bg-blue-500 text-white p-2 w-full rounded">
                    Đăng nhập
                </button>
            </form>
        </div>
    );
};

export default Login;
