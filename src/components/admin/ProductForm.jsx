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

function ProductForm({ onSave }) {
  // One object stores all controlled form values.
  const [formData, setFormData] = useState(emptyProduct);
  const [message, setMessage] = useState("");
  const formId = useId();

  // Update the matching value when the administrator types
  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  }

  // Validate and save the new product
  async function handleSubmit(event) {
    event.preventDefault();

    if (!formData.name || !formData.category || !formData.price) {
      setMessage("Name, category and price are required.");
      return;
    }

    // Number inputs still give us strings, so convert them before saving.
    const productToSave = {
      ...formData,
      price: Number(formData.price),
      stock: Number(formData.stock),
    };

    try {
      await onSave(productToSave);
      setMessage("Product added successfully.");
      setFormData(emptyProduct);
    } catch (error) {
      setMessage("Could not add product.");
    }
  }

  return (
    <form className="product-form" onSubmit={handleSubmit}>
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
      <label htmlFor={`${formId}-description`}>
        Description
        <textarea
          id={`${formId}-description`}
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </label>

      <label htmlFor={`${formId}-image`}>
        Image URL
        <input
          id={`${formId}-image`}
          name="image"
          type="text"
          value={formData.image}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add product</button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default ProductForm;
