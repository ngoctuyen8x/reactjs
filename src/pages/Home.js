import { useLocation } from "react-router-dom";
function Home() {
    const location = useLocation();
    const user = location.state; // nhận dữ liệu từ navigate
    console.log(user);
    return (

        <div>

            {user !== "" ? (<p>Xin chào {user}</p>) : (<p>Bạn cần đăng nhập</p>)}
        </div>

    );
}
export default Home;