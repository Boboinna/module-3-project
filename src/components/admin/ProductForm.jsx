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

  return (
    <form className="product-form">
      <p>Add product form</p>
    </form>
  );
}

export default ProductForm;
