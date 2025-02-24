import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "./pages/About.tsx"),
  route("contact/:id?", "./pages/Contact.tsx"),
] satisfies RouteConfig;
