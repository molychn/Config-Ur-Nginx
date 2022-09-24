import { Head } from "$fresh/runtime.ts";
// import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/styles/twind.other.css" />
      </Head>
      <div class="min-h-screen bg-gray-800">
        <header class="h-14 leading-14 px-10 border-b-1 bg-green-800 text-white shadow-md">
          <span class="text-2xl align-middle maplemono-bold">
            Config Ur Nginx
          </span>
        </header>
        <div class="flex pt-6">
          <div class="flex-none w-96 px-6">
            <p class="maplemono-bold text-white mb-4">Conf Modules</p>
            <div class="border border-slate-900 rounded-md">1</div>
          </div>
          <div class="flex-auto pb-6">
            <div class="w-2/3 mx-auto mt-0 mb-6 bg-white rounded-md">
              1
            </div>
          </div>
        </div>
      </div>
    </>
    // <div class="p-4 mx-auto max-w-screen-md">
    //   <Head>
    //     <link rel="stylesheet" href="/all.css" />
    //   </Head>
    //   <img
    //     src="/logo.svg"
    //     class="w-32 h-32"
    //     alt="the fresh logo: a sliced lemon dripping with juice"
    //   />
    //   <p class="my-6">
    //     Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
    //     file, and refresh.
    //   </p>
    //   <Counter start={3} />
    // </div>
  );
}
