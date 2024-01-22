<script lang="ts">
  import projectTemp from "$lib/temp/project";
  import { onDestroy } from "svelte";

  let items: any[];

  let leadMoreCount = 1;
  let leadMoreLoading = false;

  const unsubscribe = projectTemp.subscribe((value) => {
    items = value;
  });

  onDestroy(() => {
    unsubscribe();
  });

  async function leadMore() {
    leadMoreLoading = true;
    setTimeout(() => {
      leadMoreCount = items.length;
    }, 3000);
  }

  async function getData() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(items);
      }, 3000);
    });
    return promise;
  }
</script>

<section class="lg:w-5/6 lg:py-[6rem] mx-auto">
  <div class="relative flex justify-center items-center">
    <h2 class="text-center text-4xl font-bold text-blue-950">Our Best Works</h2>
    <span class="w-8 h-1.5 rounded-full bg-[#FFB534] absolute mt-14"></span>
  </div>

  {#await getData()}
    <div class="mt-20">
      <div class="loading" />
    </div>
  {:then}
    <div class="flex flex-wrap gap-x-5 gap-y-10 justify-center mt-10">
      {#each items.slice(0, leadMoreCount) as item}
        <article
          class="relative lg:w-[300px] flex flex-col gap-y-7 overflow-hidden group"
        >
          <img
            src={item.images}
            alt="Thumbnail"
            class="w-full h-[200px] object-cover rounded-lg"
          />
          <div
            class="absolute inset-0 z-0 bg-blue-950 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 duration-500"
          >
            <a href="#">
              <svg
                class="fill-neutral-50 w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 513.749 513.749"
                style="enable-background:new 0 0 513.749 513.749;"
                xml:space="preserve"
              >
                <g>
                  <path
                    d="M504.352,459.061l-99.435-99.477c74.402-99.427,54.115-240.344-45.312-314.746S119.261-9.277,44.859,90.15   S-9.256,330.494,90.171,404.896c79.868,59.766,189.565,59.766,269.434,0l99.477,99.477c12.501,12.501,32.769,12.501,45.269,0   c12.501-12.501,12.501-32.769,0-45.269L504.352,459.061z M225.717,385.696c-88.366,0-160-71.634-160-160s71.634-160,160-160   s160,71.634,160,160C385.623,314.022,314.044,385.602,225.717,385.696z"
                  />
                </g>
              </svg>
            </a>
          </div>
        </article>
      {/each}
    </div>

    {#if leadMoreCount === items.length}
      <div class="flex justify-end mt-10">
        <h5 class="text-sm font-bold text-blue-950">
          Total Seluruhnya ({items.length})
        </h5>
      </div>
    {/if}

    {#if leadMoreCount < items.length}
      <div class="flex justify-center mt-10">
        <button
          class={`bg-blue-800 px-5 py-3 rounded-md text-neutral-50 font-bold ${
            leadMoreLoading ? "animate-pulse" : "animate-none"
          }`}
          on:click={leadMore}>Lead more</button
        >
      </div>
    {/if}
  {/await}
</section>

<style>
  .loading {
    margin: auto;
    border: 15px solid #ddd;
    border-radius: 50%;
    border-top: 15px solid red;
    width: 150px;
    height: 150px;
    animation: loading 4s linear infinite;
  }

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
