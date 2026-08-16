import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import App from "../App";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";

function renderApp() {
  const productValue = {
    products: [],
    loading: false,
    error: "",
    addProduct: vi.fn(),
    updateProduct: vi.fn(),
    deleteProduct: vi.fn(),
  };

  const cartValue = {
    cart: [],
    cartCount: 0,
    cartTotal: 0,
    addToCart: vi.fn(),
    increaseQuantity: vi.fn(),
    decreaseQuantity: vi.fn(),
    removeFromCart: vi.fn(),
    clearCart: vi.fn(),
  };

  return render(
    <MemoryRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <ProductContext.Provider value={productValue}>
        <CartContext.Provider value={cartValue}>
          <App />
        </CartContext.Provider>
      </ProductContext.Provider>
    </MemoryRouter>,
  );
}

describe("DrinkHub starter", () => {
  it("renders the home page and navigation", () => {
    renderApp();

    expect(
      screen.getByRole("heading", {
        name: /your favourite drinks in one place/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /shop/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /cart/i })).toBeInTheDocument();
  });
});
