'use client';
import { useState } from 'react';
import Description, { descriptions } from './description';
import '@/app/styles/slider.scss';
export default function Slider() {
  const [activeDescription, setActiveDescription] = useState(0);

  const setActiveByTitle = (id) => {
    setActiveDescription(id);
  };

  return (
    <main className="grid place-items-center w-full mx-auto">
      <div className="description">
        <Description
          activeDescription={activeDescription}
          setActiveByTitle={setActiveByTitle}
        />
      </div>
    </main>
  );
}
