import type { Component } from 'solid-js';
import { A } from '@solidjs/router';
import Upload from './upload';

const App: Component = () => {
  let dialog: HTMLDialogElement;
  return (
    <div class="h-screen">
      <div class="bg-app-color px-8 py-4 flex justify-between items-center box-border h-30">
        <h1 class="text-4xl font-medium text-gray-200">BadFood?</h1>
       <img class="max-h-20" src='/logo.png' />
      </div>
      <dialog ref={dialog}>

      </dialog>
      <Upload />
    </div>
  );
};

export default App;
