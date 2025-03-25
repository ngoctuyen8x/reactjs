import { useState, useEffect } from "react";
import AddPost from "./AddPost";

function Posts() {
    const [posts, setPosts] = useState([]);

    // Lấy danh sách bài viết từ API
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => setPosts(data.slice(0, 5))) // Chỉ lấy 5 bài đầu tiên
            .catch((error) => console.error("Lỗi khi lấy bài viết:", error));
    }, []);

    // ✅ Hàm thêm bài viết mới (ĐẢM BẢO ĐỊNH NGHĨA HÀM `addPost`)
    const addPost = (newPost) => {
        console.log("Thêm bài viết:", newPost);

        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newPost),
        })
            .then((res) => res.json())
            .then((data) => setPosts([data, ...posts])) // Thêm bài viết mới vào danh sách
            .catch((error) => console.error("Lỗi khi thêm bài viết:", error));
    };

    return (
        <div className="p-6">
            {/* ✅ TRUYỀN `onAdd` ĐÚNG CÁCH */}
            <AddPost onAdd={addPost} />

            <h2 className="text-2xl font-bold mt-4">Danh sách bài viết</h2>
            <ul className="mt-2">
                {posts.map((post) => (
                    <li key={post.id} className="border p-3 my-2">
                        <h3 className="font-bold">{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Posts;
