import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import SearchBar from "../components/products/SearchBar";
import CategoryFilter from "../components/products/CategoryFilter";
import ProductList from "../components/products/ProductList";

function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { products, loading, error } = useContext(ProductContext);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="page">
      <h1>Shop drinks</h1>

      <div className="shop-controls">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <CategoryFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>

      {loading && <p>Loading products...</p>}
      {error && <p className="error-message">{error}</p>}
      {!loading && !error && <ProductList products={filteredProducts} />}
    </main>
  );
}

export default ProductsPage;