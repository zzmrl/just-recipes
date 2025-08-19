<script lang="ts">
  import "../app.css";

  let { children } = $props();
</script>

<div class="h-screen bg-base-100">
  {@render children()}
</div>
