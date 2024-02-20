import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <div>
        <h1 className="text-4xl lg:text-6xl text-[#4fbfeb] font-mono tracking-widest leading-snug text-center">
          Ingenre
        </h1>
        <p className="text-center tracking-wider text-[.8rem] md:text-lg lg:text-xl text-gray-300 font-mono leading-10">
          Get a quick list of animes to watch
        </p>

        <button className="bg-black text-white font-mono tracking-wider px-3 py-2 rounded-lg">
          Click me
        </button>
      </div>
    </section>
  );
}

export default App;
