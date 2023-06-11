import { FaBrandsHooli } from 'solid-icons/fa';
import { BsUpload } from 'solid-icons/bs';
import type { Component } from 'solid-js';

const App: Component = () => {
  return (
    <div class="h-full">
      <div class="bg-app-color px-8 py-4 flex justify-between items-center box-border h-1/10">
        <h1 class="text-4xl font-medium text-gray-200">BadFood?</h1>
        <img class="max-h-20" src='/logo.png' />
      </div>
      <input type="file" id="imageUpload" accept='image/gif,image/png,image/jpeg,image/webp,image/avif' hidden/>
      <label for="imageUpload" class="h-full grid place-items-center box-border h-9/10">
        <BsUpload size={96} />
      </label>
    </div>
  );
};

export default App;
