<script lang="ts">
  import { onDestroy } from "svelte";
  import { aboutTemp } from "$lib/temp/about";

  let values: any[];

  const unsubscribe = aboutTemp.subscribe((value) => {
    values = value;
  });

  onDestroy(() => {
    unsubscribe();
  });
</script>

<section class="lg:pt-[6rem] mx-auto">
  <div class="bg-blue-950 lg:py-12">
    <h2 class="text-3xl font-bold text-center text-neutral-50">
      Find out more about <span class="text-[#F4CE14]">what we do</span>
    </h2>
  </div>

  <div class="lg:w-5/6 mx-auto lg:mt-20 flex gap-x-7">
    <div class="w-[600px] h-full">
      <img
        src="/images/about/maing-profile.jpg"
        alt="Profile Maing"
        class="w-full h-full"
      />
    </div>
    <div class="grid grid-cols-2 gap-4 items-start mt-10 w-full lg:ml-20">
      {#each values as item (item.id)}
        <article class="flex gap-x-4 items-center">
          <div
            class="border-2 border-[#F4CE14] w-32 h-20 rounded-full items-center flex justify-center"
          >
            <h1 class="font-bold text-3xl text-[#F4CE14]">0{item.id}</h1>
          </div>
          <div>
            <h2 class="text-2xl font-bold mb-2 text-blue-950">
              {item.title}
            </h2>
            <p class="text-neutral-500 text-md font-normal">
              {item.description}
            </p>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>
