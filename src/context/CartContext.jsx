import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    // notify user
    try {
      window.alert(`${product.name} added to cart.`);
    } catch (e) {
      // ignore if alert unavailable
    }

    setCart((currentCart) => {
      const existingItem = currentCart.find(
        (item) => item.id === product.id,
      );

      if (existingItem) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });
  }

  function increaseQuantity(productId) {
    // notify user
    try {
      const item = cart.find((i) => i.id === productId);
      if (item) window.alert(`Quantity increased for ${item.name}.`);
    } catch (e) {}

    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    );
  }

  function decreaseQuantity(productId) {
    // notify user
    try {
      const item = cart.find((i) => i.id === productId);
      if (item) window.alert(`Quantity decreased for ${item.name}.`);
    } catch (e) {}

    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  function removeFromCart(productId) {
    // notify user
    try {
      const item = cart.find((i) => i.id === productId);
      if (item) window.alert(`${item?.name ?? "Item"} removed from cart.`);
    } catch (e) {}

    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== productId),
    );
  }

  function clearCart() {
    try {
      window.alert("Cart cleared.");
    } catch (e) {}

    setCart([]);
  }

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const value = {
    cart,
    cartCount,
    cartTotal,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
