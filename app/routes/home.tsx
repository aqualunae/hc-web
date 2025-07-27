import type { Route } from "./+types/home";
import Main from '../pages/Main';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Hallowed Crossing" },
    { name: "description", content: "A Halloween fantasy farming game in development." },
  ];
}

export default function Home() {
  return <Main />;
}
