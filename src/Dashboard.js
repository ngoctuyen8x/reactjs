import { Link, Outlet } from "react-router-dom";

function Dashboard() {
    return (
        <div>
            <h1>📊 Dashboard</h1>
            <nav>
                <ul>
                    <li><Link to="profile">👤 Profile</Link></li>
                    <li><Link to="settings">⚙ Settings</Link></li>
                </ul>
            </nav>
            <hr />
            <Outlet /> {/* Đây là nơi hiển thị nội dung con */}
        </div>
    );
}

export default Dashboard;