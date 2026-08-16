import { createContext, useEffect, useState } from "react";

const API_URL = "http://localhost:3001/products";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Could not load products");
        }

        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setError("");
      })
      .catch(() => {
        setError("Could not load products. Start the JSON server.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  function addProduct(newProduct) {
    return fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Could not add product");
        }

        return response.json();
      })
      .then((createdProduct) => {
        setProducts((currentProducts) => [
          ...currentProducts,
          createdProduct,
        ]);

        return createdProduct;
      });
  }

  function updateProduct(productId, changes) {
    return fetch(`${API_URL}/${productId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(changes),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Could not update product");
        }

        return response.json();
      })
      .then((updatedProduct) => {
        setProducts((currentProducts) =>
          currentProducts.map((product) =>
            product.id === updatedProduct.id ? updatedProduct : product,
          ),
        );

        return updatedProduct;
      });
  }

  function deleteProduct(productId) {
    return fetch(`${API_URL}/${productId}`, {
      method: "DELETE",
    }).then((response) => {
      if (!response.ok) {
        throw new Error("Could not delete product");
      }

      setProducts((currentProducts) =>
        currentProducts.filter((product) => product.id !== productId),
      );
    });
  }

  const value = {
    products,
    loading,
    error,
    addProduct,
    updateProduct,
    deleteProduct,
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
}
