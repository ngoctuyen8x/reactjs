import { Link } from "react-router-dom";
const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Smartphone" },
    { id: 3, name: "Tablet" }
]
function Products() {
    return (
        <div>
            <h1>🛒 Đây là danh sách sản phẩm</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <Link to={`/products/${product.id}`}>{product.name}</Link>
                    </li>
                ))

                }
            </ul>
        </div>
    )
} export default Products