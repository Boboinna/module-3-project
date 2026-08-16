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
      <label htmlFor={`${formId}-category`}>
        Category
        <select
          id={`${formId}-category`}
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          {" "}
          <option value="">Choose category</option>
          <option value="Soda">Soda</option>
          <option value="Beer">Beer</option>
          <option value="Juice">Juice</option>
        </select>
      </label>
      <label htmlFor={`${formId}-price`}>
        Price
        <input
          id={`${formId}-price`}
          name="price"
          type="number"
          min="1"
          value={formData.price}
          onChange={handleChange}
        />
      </label>

      <label htmlFor={`${formId}-stock`}>
        Stock
        <input
          id={`${formId}-stock`}
          name="stock"
          type="number"
          min="0"
          value={formData.stock}
          onChange={handleChange}
        />
      </label>
    </form>
  );
}

export default ProductForm;
