import type { Route } from "./+types/contact";
import Contact from "../pages/Contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact - React Router App" },
    {
      name: "description",
      content: "Get in touch with us at React Router App.",
    },
  ];
}

export default function ContactPage() {
  return <Contact />;
}
