import type { Route } from "./+types/products";
import Products from "../pages/Products";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Products - React Router App" },
    { name: "description", content: "Browse our amazing product selection." },
  ];
}

export default function ProductsPage() {
  return <Products />;
}
