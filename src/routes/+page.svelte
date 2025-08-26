<script>
  import Navbar from "$lib/components/Navbar.svelte";
  import ThemeControl from "$lib/components/ThemeControl.svelte";
  import Search from "../lib/components/Search.svelte";
</script>

<svelte:head>
  <title>Just Recipes</title>
  <meta name="description" content="Find the best recipes." />
</svelte:head>

<Navbar>
  <div></div>
  <ThemeControl />
</Navbar>
<div class="hero min-h-3/5">
  <main>
    <div class="hero-content text-center">
      <div class="max-w-xl">
        <h1 class="mb-6 text-5xl font-bold">Just Recipes</h1>
        <Search autofocus action="/recipes" />
      </div>
    </div>
  </main>
</div>
