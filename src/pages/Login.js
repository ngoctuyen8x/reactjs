import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Login() {
    const [username, setUsername] = useState("");
    const navigate = useNavigate();//khởi tạo useNavigate
    const handleLogin = () => {
        // const userInfo = {
        //     username: "Jone",
        //     email: "abc@gmail.com"
        // }
        // navigate("/", { state: userInfo });
        if (username.trim() !== "") {
            navigate("/", { state: username });
        }
        else {
            alert("vui lòng đăng nhập");
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>🔑 Trang Đăng Nhập</h1>
            <input type="text" placeholder="nhập tên đăng nhập"
                value={username} onChange={(e) => setUsername(e.target.value)}
            />

            <button onClick={handleLogin}>Đăng nhập</button>
        </div>
    )
}
export default Login