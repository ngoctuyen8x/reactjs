import { useState } from "react";

function AddPost({ onAdd }) { // ✅ ĐẢM BẢO NHẬN ĐÚNG PROP `onAdd`
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !body) return;

        console.log("Gọi hàm onAdd với:", { title, body });

        onAdd({ title, body, userId: 1 }); // ✅ GỌI HÀM `onAdd` KHI SUBMIT
        setTitle("");
        setBody("");
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 border rounded">
            <h2 className="text-xl font-bold">Thêm bài viết</h2>
            <input
                type="text"
                placeholder="Tiêu đề"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border p-2 w-full my-2"
            />
            <textarea
                placeholder="Nội dung"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                className="border p-2 w-full my-2"
            ></textarea>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Thêm bài viết
            </button>
        </form>
    );
}

export default AddPost;
