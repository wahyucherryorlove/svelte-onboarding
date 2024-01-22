<script lang="ts">

  // Form Pendaftaran
  let fullName = "";
  let email = "";
  let dateOfBirth = "";
  let gender = "";
  let usedSvelte = false;
  let description = "";

  function submitData() {
    console.table([
      fullName,
      email,
      dateOfBirth,
      gender,
      (usedSvelte = true),
      description,
    ]);
  }

  // Counter
  let count = 0

  function buttonMinus() {
    count -= 1
  }

  function buttonPlus() {
    count += 1
  }

  $: if( count > 10) {
    alert("Hahahahaha");
    count = 0
  }
</script>

<section class="lg:w-5/6 lg:py-[6rem] mx-auto">
  <div class="relative flex justify-center items-center">
    <h2 class="text-center text-4xl font-bold text-blue-950">
      Pendaftaran Peserta Baru
    </h2>
    <span class="w-8 h-1.5 rounded-full bg-[#FFB534] absolute mt-14" />
  </div>

  <form class="mt-14" on:submit|preventDefault={submitData}>
    <ul class="flex flex-col gap-y-5">
      <li class="flex flex-col gap-y-3">
        <label for="" class="font-bold">Full Name :</label>
        <input
          type="text"
          class="border border-transparent bg-neutral-200 text-neutral-500 outline-none py-2 px-4 rounded-md"
          placeholder="Full Name...."
          bind:value={fullName}
        />
      </li>
      <li class="flex flex-col gap-y-3">
        <label for="" class="font-bold">Email :</label>
        <input
          type="text"
          class="border border-transparent bg-neutral-200 text-neutral-500 outline-none py-2 px-4 rounded-md"
          placeholder="Email...."
          bind:value={email}
        />
      </li>
      <li class="flex flex-col gap-y-3">
        <label for="" class="font-bold">Date Of Birth :</label>
        <input
          type="date"
          class="border border-transparent bg-neutral-200 text-neutral-500 outline-none py-2 px-4 rounded-md"
          placeholder="Date Of Birth...."
          bind:value={dateOfBirth}
        />
      </li>
      <li class="flex flex-col gap-y-3">
        <label for="" class="font-bold">Gender :</label>
        <div class="flex items-center gap-x-4">
          <div>
            <input
              type="radio"
              name="gender"
              class="border border-transparent bg-neutral-200 text-neutral-500 outline-none py-2 px-4 rounded-md"
              value="pria"
              bind:group={gender}
            /> Male
          </div>
          <div>
            <input
              type="radio"
              name="gender"
              class="border border-transparent bg-neutral-200 text-neutral-500 outline-none py-2 px-4 rounded-md"
              value="wanita"
              bind:group={gender}
            /> Female
          </div>
        </div>
      </li>
      <li class="flex flex-col gap-y-3">
        <label for="" class="font-bold">Comment :</label>
        <textarea
          rows="6"
          class="border border-transparent bg-neutral-200 text-neutral-500 outline-none py-2 px-4 rounded-md"
          placeholder="Comment...."
          bind:value={description}
        />
      </li>
      <li class="flex items-center gap-x-4">
        <input
          type="checkbox"
          class="outline-none rounded-md"
          bind:checked={usedSvelte}
        />
        <span class="font-bold">Is Ever Used Svelte</span>
      </li>
      <li class="mt-5">
        <button
          class="w-full py-2.5 font-bold text-neutral-50 bg-blue-700 rounded-md"
          >Submit</button
        >
      </li>
    </ul>
  </form>

<!-- Counter -->
<div class="flex  gap-x-4  items-center justify-center mt-20">
  <button class="text-md font-bold bg-red-700 text-neutral-50 px-3 py-2 rounded-md disabled:bg-red-500" on:click={buttonMinus} disabled={count === 0 ? true : false}>Kurang</button>
  <h4 class="font-bold text-2xl">{count}</h4>
  <button class="text-md font-bold bg-green-700 text-neutral-50 px-3 py-2 rounded-md" on:click={buttonPlus}>Tambah</button>
</div>
</section>

<style></style>
