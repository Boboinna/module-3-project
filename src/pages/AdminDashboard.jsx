import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import AdminProductCard from "../components/admin/AdminProductCard";

function AdminDashboard() {
  const { products, loading, error } = useContext(ProductContext);