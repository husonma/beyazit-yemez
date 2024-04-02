"use client"
import { useState } from "react";
import Description, { descriptions } from "./description";

export default function Slider() {
  const [activeDescription, setActiveDescription] = useState(0);


  const clickNext = () => {
    setActiveDescription((prev) => (prev + 1) % descriptions.length);
  };

  const clickPrev = () => {
    setActiveDescription((prev) => (prev - 1 + descriptions.length) % descriptions.length);
  };

  return (
    <main className="grid place-items-center w-full mx-auto max-w-5xl shadow-2xl rounded-2xl">
      <div
        className={`w-full flex justify-center items-center gap-4 transition-transform ease-in-out duration-500 md:rounded-2xl p-6 md:p-0`}
      >
        <Description
          activeDescription={activeDescription}
          clickNext={clickNext}
          clickPrev={clickPrev}
        />
      </div>
    </main>
  );
}