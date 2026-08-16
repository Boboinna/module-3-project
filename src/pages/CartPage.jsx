import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/cart/CartItem";

function CartPage() {
  const { cart, cartTotal, clearCart } = useContext(CartContext);

  return (
    <main className="page">
      <div className="page-heading">
        <h1>Your cart</h1>
        {cart.length > 0 && (
          <button type="button" onClick={clearCart}>
            Clear cart
          </button>
        )}
      </div>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <h2 className="cart-total">Total: Ksh {cartTotal}</h2>
        </>
      )}
    </main>
  );
}

export default CartPage;