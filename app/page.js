import Image from "next/image";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Nav from "./components/Nav/Nav";
import Contact from "./pages/Contact/Contact";

export default function App() {
  return (
    <div className="bg-slate-100 text-gray-800">
      <Nav />
      <Home />
      <About />
      <Contact />
    </div>
  );
}
