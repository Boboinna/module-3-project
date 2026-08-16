import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import AdminProductCard from "../components/admin/AdminProductCard";

function AdminDashboard() {
  const { products, loading, error } = useContext(ProductContext);
  return (
    <main className="page">
      <div className="page-heading">
        <h1>Manage products</h1>
        <Link to="/admin/add" className="button-link">
          Add product
        </Link>
      </div>

      {loading && <p>Loading products...</p>}
      {error && <p className="error-message">{error}</p>}

      <div className="admin-list">
        {products.map((product) => (
          <AdminProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}

export default AdminDashboard;
