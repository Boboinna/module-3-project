import { useId, useState } from "react";

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

  // Use the input name to update the matching property.
  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  }
