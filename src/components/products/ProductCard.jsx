import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <article className="product-card" data-testid="product-card">
      <img src={product.image} alt={product.name} />
      <p className="category-label">{product.category}</p>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p className="price">Ksh {product.price}</p>
      <p>{product.stock} in stock</p>
      <button
        type="button"
        disabled={product.stock === 0}
        onClick={() => addToCart(product)}
      >
        {product.stock === 0 ? "Out of stock" : "Add to cart"}
      </button>
    </article>
  );
}

export default ProductCard;