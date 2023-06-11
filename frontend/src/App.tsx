import { FaBrandsHooli } from 'solid-icons/fa';
import type { Component } from 'solid-js';

const App: Component = () => {
  return (
    <div class="bg-teal-400 px-8 py-4 flex justify-between">
      <h1 class="text-4xl font-bold">BadFood?</h1>
      <FaBrandsHooli size={48} />
    </div>
  );
};

export default App;
