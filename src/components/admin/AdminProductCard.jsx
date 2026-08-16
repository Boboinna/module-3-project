  import { useContext, useState } from "react";
import { ProductContext } from "../../context/ProductContext";

function AdminProductCard({ product }) {
  const [price, setPrice] = useState(product.price);
  const { updateProduct, deleteProduct } = useContext(ProductContext);
  function handlePriceUpdate() {
    updateProduct(product.id, { price: Number(price) });
  }

  return (
    <article className="admin-product">
      <strong>{product.name}</strong>
      <span>{product.category}</span>

      <label>
        Price
        <input
          type="number"
          min="1"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
      </label>
      <button type="button" onClick={handlePriceUpdate}>
        Save price
      </button>
      <button type="button" onClick={() => deleteProduct(product.id)}>
        Delete
      </button>
    </article>
  );
}

export default AdminProductCard;
