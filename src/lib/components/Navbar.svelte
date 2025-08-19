<script>
  let { children } = $props();
</script>

<header class="navbar bg-base-200">
  <div class="container mx-auto px-4 py-1">
    <div class="flex flex-wrap content-center items-center justify-between">
      {@render children()}
    </div>
  </div>
</header>
