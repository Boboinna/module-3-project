import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductForm from "../components/admin/ProductForm";

function AddProductPage() {
  const { addProduct } = useContext(ProductContext);

  return (
    <main className="page form-page">
      <h1>Add a new drink</h1>

      <ProductForm onSave={addProduct} />
    </main>
  );
}

export default AddProductPage;
