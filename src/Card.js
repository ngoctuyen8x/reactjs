import { useState } from "react";
function Card({ id, title, desc, onDelete, onEdit }) {
    const [count, setCount] = useState(0);
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(title);
    const [newDesc, setNewDesc] = useState(desc);
    const handleSave = () => {
        onEdit(id, newTitle, newDesc); //gửi dữ liệu lên app.js
        setIsEditing(false); //thoát chế độ chỉnh sửa
    }
    return (
        <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white">
            <img className="w-full h-48 object-cover" src="https://png.pngtree.com/png-vector/20220615/ourmid/pngtree-demonstration-people-silhouette-png-image_5047759.png" alt="random" />
            <div className="p-4">
                {
                    isEditing ? (
                        <>
                            <input type="text" className="border px-2 py-1 w-full" value={newTitle} onChange={(e) => setNewTitle(e.target.value)}></input>

                            <input type="text" className="border px-2 py-1 w-full" value={newDesc} onChange={(e) => setNewDesc(e.target.value)}></input>
                            <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-500" onClick={handleSave}>Lưu</button>
                            <button className="mt-2 mt-2 bg-gray-500 text-white px-4 ypy-2 rounded hover:bg-gray" onClick={() => setIsEditing(false)}></button>
                        </>
                    ) : (
                        <>
                            <h2 className="text-xl font-bolt text-gray-800">{title} - {id}</h2>
                            <p className="text-gray-600 mt-2">{desc}</p>
                            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Xem them</button>
                            <p className="mt-2 text-gray-700">Số lần nhấn: {count}</p>
                            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover-bg-blue-700" onClick={() => setCount(count + 1)}>Click here</button>
                            <button
                                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                                onClick={() => setIsEditing(true)}
                            >
                                Sửa
                            </button>
                            <button className="mt-4 ml-2 bg-red-500 text-white px-4 py-2 rounded hover-bg-blue-700" onClick={() => {
                                if (window.confirm("Bạn có chắc chắn muốn xóa không")) {
                                    onDelete(id);
                                }
                            }}>Xóa</button>
                        </>
                    )
                }
            </div>
        </div>
    );
}
export default Card;