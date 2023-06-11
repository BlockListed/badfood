import { Component, Show, Signal, createResource, createSignal } from "solid-js";
import { BsUpload } from "solid-icons/bs";
import { Router, Routes, Route, useNavigate } from "@solidjs/router";

// I know this is horrifying but I need to get done
enum State {
  Upload,
  Information,
}
 
const [goodbad, setGoodbad] = createSignal("");

const [foodForm, setFoodForm]: Signal<FormData> = createSignal();

const Upload: Component = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" component={UploadComponent} />
          <Route path="/information" component={InformationComponent} />
        </Routes>
      </Router>
    )
}

const UploadComponent: Component = () => {
  let navigate = useNavigate();

  async function onChange(event) {
    let element: HTMLInputElement = event.target;
    let data = new FormData();
    data.append("file", element.files[0]);
    let result = await fetch("http://100.64.208.127:8000/goodbad", {
      body: data,
      method: "POST",
    });
    let body = await result.json();
    console.log(body);
    setGoodbad(body);
    setFoodForm(data);
    navigate("/information");
  }

  return (
    <>
      <input onchange={onChange} type="file" id="imageUpload" accept='image/gif,image/png,image/jpeg,image/webp,image/avif' hidden/>
      <label for="imageUpload" class="h-full grid place-items-center box-border">
          <BsUpload size={96} />
      </label>
    </>
  )
}

const InformationComponent: Component = () => {
  const data = {
    "Pizza": <div class="p-4">
    Signs your Pizza might be bad: <br />
    1. The first signs of bad pizza are a hard and dry texture, still safe but not too tasty. <br />
    2. If the cheese starts smelling and it gets mouldy <br />
    3 If the Pizza looks slimy and there is mold on it. <br />
    <a href="https://bakinghow.com/pizza-went-bad/" target="_blank" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">[Source]</a>
    </div>,
  }
  const [food] = createResource(fetchInformation);
  if (goodbad() != "Good") {
    return (
      <div class="bg-red-700 h-full">
        <h1 class="text-center text-2xl font-bold">Food is NOT OK to eat.</h1>
        <Back />
      </div>
    )
  } else {
    return (
      <div class="bg-green-300 h-full">
        <h1 class="text-center text-2xl font-bold">Food is probably good.</h1>
        <Show when={!food.loading}>
          {data[food()]}
        </Show>
        <Back />
      </div>
    )
  }
}

async function fetchInformation(): Promise<string> {
  let result = await fetch("http://100.64.208.127:8000/food", {
    method: "POST",
    body: foodForm(),
  });

  return result.json()
}

function Back() {
  let navigate = useNavigate();
  function back() {
    navigate("/");
  }
  
  return (
    <button onclick={back}>
      BACK
    </button>
  )
}

export default Upload