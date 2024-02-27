import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="flex min-h-screen flex-col">
      <header class="flex items-center justify-between px-5 py-10">
        <a href="/">
          <div class="logo">
            <h3 class="font-bold">Tracepak</h3>
          </div>
        </a>
        <Link href="/register">
          <button class="rounded-full bg-gray-200 px-8 py-3 text-sm font-semibold text-gray-800 transition-all  hover:bg-gray-300 focus:bg-gray-400">
            Mulai Bisnis
          </button>
        </Link>
      </header>
      <section class="mb-4 flex flex-1 flex-col justify-between gap-10 px-5">
        <div class="mt-24">
          <h1 class="mb-2 w-fit text-4xl font-bold">Tracepak .</h1>
          <p class="text-wrap w-80 text-justify">
            adalah sebuah aplikasi web yang menghubungkan pelanggan dimana saja
          </p>
        </div>
        <a
          href="mailto:androxoss@hotmail.com"
          data-splitbee-event="Say Hello"
          class="mb-24 flex w-full scale-100 flex-col items-center justify-around space-y-10 rounded-xl bg-indigo-600 p-10 transition-transform md:flex-row md:space-y-0 md:hover:-skew-x-3 md:hover:scale-105"
        >
          <div class="flex flex-col space-y-2">
            <span class="text-xl font-bold">
              Let's Talk about Your Project.
            </span>
            <span class="opacity-90">
              Something on your mind? what you want to build just close by one
              Click!
            </span>
          </div>
          <button class="flex items-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-gray-800 transition-all hover:bg-gray-300 focus:bg-gray-400">
            Let's do this
          </button>
        </a>
      </section>
      <footer class="md:px-auto flex items-end justify-between px-4 pb-4">
        <ul>
          <li>address: daguran, trimurti, srandakan, bantul</li>
          <li>office: kopikonfig.id</li>
          <li>email: androxoss@hotmail.com</li>
          <li>phone: 089649246450</li>
        </ul>
        <p>created by sandikodev ❤️</p>
      </footer>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Tracepak",
  meta: [
    {
      name: "description",
      content: "yuk kembangin bisnis!",
    },
  ],
};
