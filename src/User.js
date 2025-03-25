import { useState, useEffect } from "react";
function Users() {
    const [users, setUsers] = useState([]);
    const [Loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("lỗi get dữ liệu ", err);
                setLoading(false);
            })
    }, []);

    if (Loading) return <p>Đang tải dữ liệu....</p>

    return (
        <div>
            <h2>Danh sách người dùng</h2>
            <ul>
                {users.map((user) =>
                (
                    <li key={user.id}>{user.name} - {user.email}</li>
                )
                )}
            </ul>
        </div>
    )
}
export default Users