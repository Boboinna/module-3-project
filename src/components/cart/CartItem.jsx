import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function CartItem({ item }) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } =
    useContext(CartContext);

  return (
    <article className="cart-item">
      <img src={item.image} alt={item.name} />

      <div>
        <h2>{item.name}</h2>
        <p>Ksh {item.price} each</p>
      </div>

      <div className="quantity-controls">
        <button type="button" onClick={() => decreaseQuantity(item.id)}>
          -
        </button>
        <span>{item.quantity}</span>
        <button type="button" onClick={() => increaseQuantity(item.id)}>
          +
        </button>
      </div>

      <strong>Ksh {item.price * item.quantity}</strong>

      <button type="button" onClick={() => removeFromCart(item.id)}>
        Remove
      </button>
    </article>
  );
}

export default CartItem;