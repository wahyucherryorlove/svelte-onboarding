<script lang="ts">
  import { servicesTemp } from "$lib/temp/services";
</script>

<section class="lg:w-5/6 lg:pt-[6rem] mx-auto">
  <h2 class="text-center text-4xl font-bold text-blue-950">Our Services</h2>
    <div class="flex flex-wrap gap-x-5 gap-y-10 justify-center mt-10">
      {#each servicesTemp as item (item.id)}
        <article class="lg:w-[400px] flex flex-col gap-y-7">
          <img
            src={item.images}
            alt="Thumbnail"
            class="w-full h-[200px] object-cover rounded-lg"
          />
          <div class="">
            <a
              href="#"
              class="text-2xl font-bold text-blue-950 hover:text-yellow-500 duration-150"
              >{item.title}</a
            >
            <p class="text-[15px] text-neutral-500 mt-3">
              {item.description}
            </p>
          </div>
        </article>
      {/each}
    </div>
</section>
