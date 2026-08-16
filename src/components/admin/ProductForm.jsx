import { useId, useState } from "react";

// Starting values for the product form
const emptyProduct = {
  name: "",
  brand: "",
  category: "",
  description: "",
  price: "",
  stock: "",
  image: "/drink-placeholder.svg",
};

function ProductForm() {
  const [formData, setFormData] = useState(emptyProduct);
  const [message, setMessage] = useState("");
  const formId = useId();

  // Update the matching value when the administrator types
  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  return (
    <form className="product-form">
      <label htmlFor={`${formId}-name`}>
        Product name
        <input
          id={`${formId}-name`}
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
        />
      </label>

      <label htmlFor={`${formId}-brand`}>
        Brand
        <input
          id={`${formId}-brand`}
          name="brand"
          type="text"
          value={formData.brand}
          onChange={handleChange}
        />
      </label>
    </form>
  );
}

export default ProductForm;
