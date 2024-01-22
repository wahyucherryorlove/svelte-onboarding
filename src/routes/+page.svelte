<script lang="ts">
  import AboutComponent from "./About.svelte";
  import ProjectComponent from "./Project.svelte"
  import ServiceComponent from "./Service.svelte";

</script>

<svelte:head>
  <title>Wahyudi Umar</title>
</svelte:head>

<section class="relative bg-[url('/images/home/jumbotron.jpg')] lg:h-[35rem] bg-cover bg-fixed">
  <div class="bg-neutral-800/50 absolute inset-0 z-0" />
  <div class="flex h-full w-full flex-col justify-center pl-40 pr-10 absolute">
    <h2 class="font-bold text-5xl text-neutral-50 mb-5">Let's talk business</h2>
    <p class="text-lg font-normal w-[50rem] text-neutral-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iure, consequatur natus nisi accusantium atque eveniet laborum omnis in? Doloremque ullam dignissimos, veritatis deserunt delectus quisquam mollitia blanditiis dolore facere?</p>

    <a href="/contact" class="bg-blue-900 w-36 text-center py-3 rounded-md block mt-8 font-semibold text-neutral-50">Contact us</a>
  </div>
</section>

<ServiceComponent />

<AboutComponent />

<ProjectComponent />