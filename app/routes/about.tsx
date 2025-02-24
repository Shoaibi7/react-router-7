import type { Route } from "./+types/about";
import About from "../pages/About";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Us - React Router App" },
    {
      name: "description",
      content: "Learn more about us at React Router App.",
    },
  ];
}

export default function AboutPage() {
  return <About />;
}
