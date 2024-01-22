<script lang="ts">
  import { page } from "$app/stores";
  import { onMount, onDestroy } from "svelte";

  let scrollBar = false;

  onMount(() => {
    window.onscroll = () => {
      if (window.scrollY > 220) {
        scrollBar = true;
      } else {
        scrollBar = false;
      }
    };
  });
</script>

<nav
  class={`flex justify-between bg-[#012F5C] lg:h-[75px] items-center lg:px-40 top-0 w-full z-50 ${
    scrollBar === true ? "scroll-bar" : "absolute"
  }`}
>
  <div class="flex items-center lg:gap-x-4">
    <img src="/logo.png" alt="Jumain" class="w-14 h-14" />
    <h2 class="text-xl font-bold text-neutral-50">Jumaing Maing</h2>
  </div>

  <ul class="flex lg:gap-x-7">
    <li>
      <a
        href="/"
        class={`${
          $page.url.pathname === "/"
            ? "text-[#F8E559] font-bold"
            : "font-bold text-neutral-50"
        }`}>Home</a
      >
    </li>
    <li>
      <a
        href="/services"
        class={`${
          $page.url.pathname === "/about"
            ? "text-[#F8E559] font-bold"
            : "font-bold text-neutral-50"
        }`}>Services</a
      >
    </li>
    <li>
      <a
        href="/about"
        class={`${
          $page.url.pathname === "/portfolio"
            ? "text-[#F8E559] font-bold"
            : "font-bold text-neutral-50"
        }`}>About</a
      >
    </li>
    <li>
      <a
        href="/project"
        class={`${
          $page.url.pathname === "/blog"
            ? "text-[#F8E559] font-bold"
            : "font-bold text-neutral-50"
        }`}>Project</a
      >
    </li>
    <li>
      <a
        href="/blog"
        class={`${
          $page.url.pathname === "/blog"
            ? "text-[#F8E559] font-bold"
            : "font-bold text-neutral-50"
        }`}>Blog</a
      >
    </li>
    <li>
      <a
        href="/contact"
        class={`${
          $page.url.pathname === "/contact"
            ? "text-[#F8E559] font-bold"
            : "font-bold text-neutral-50"
        }`}>Contact</a
      >
    </li>

    <li>
      <a
        href="/pendaftaran"
        class="font-bold text-neutral-50 bg-[#E9B824] px-3 py-2 rounded-md ml-4"
        >Sign up</a
      >
    </li>
  </ul>
</nav>

<style>
  .scroll-bar {
    position: fixed;
    animation: scroll-bar-animation 0.5s;
  }

  @keyframes scroll-bar-animation {
    from {
      transform: translateY(-50px);
    }
    to {
      transform: translateY(0px);
    }
  }
</style>
