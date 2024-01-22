<script lang="ts">
  import "./styles.css";
  import Header from "./Header.svelte";

  let main = "main";

  const getData = () => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Header);
        resolve(main);

        if (true) {
          return;
        }
      }, 3000);
    });

    return promise;
  };
</script>

<svelte:head>
  <link rel="icon" href="/logo.png" />
</svelte:head>

<div class="app">
  <Header />
  <main class="mt-[4.5rem]">
    <slot />
  </main>
</div>
