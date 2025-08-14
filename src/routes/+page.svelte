<script>
  import ThemeControl from "$lib/components/ThemeControl.svelte";
  import Search from "../lib/components/Search.svelte";
</script>

<svelte:head>
  <title>Just Recipes</title>
  <meta name="description" content="Find the best recipes." />
</svelte:head>

<div class="absolute top-0 navbar flex-row-reverse shadow-sm">
  <div>
    <ThemeControl />
  </div>
</div>
<div class="hero min-h-screen bg-base-200">
  <div class="hero-content text-center">
    <div class="max-w-xl">
      <h1 class="mb-6 text-5xl font-bold">Just Recipes</h1>
      <Search autofocus />
    </div>
  </div>
</div>
