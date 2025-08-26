<script lang="ts">
  import Navbar from "$lib/components/Navbar.svelte";
  import ThemeControl from "$lib/components/ThemeControl.svelte";
  import Search from "$lib/components/Search.svelte";
  import type { PageData } from "./$types";
  import { page } from "$app/state";

  let { data }: { data: PageData } = $props();

  const recipe = data.recipe;

  const searchQuery = $derived(page.url.searchParams.get("q") || "");

  // State for ingredient checklist
  let checkedIngredients = $state(new Set<number>());

  function toggleIngredient(index: number) {
    if (checkedIngredients.has(index)) {
      checkedIngredients.delete(index);
    } else {
      checkedIngredients.add(index);
    }
    checkedIngredients = new Set(checkedIngredients);
  }

  // Print functionality
  function printRecipe() {
    window.print();
  }

  // Share functionality
  async function shareRecipe() {
    if (navigator.share) {
      try {
        await navigator.share({
          title: recipe.title,
          text: recipe.description,
          url: window.location.href
        });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert("Recipe URL copied to clipboard!");
      } catch (err) {
        console.log("Error copying to clipboard:", err);
      }
    }
  }
</script>

<svelte:head>
  <title>{recipe.title} - Just Recipes</title>
  <meta name="description" content={recipe.description} />
  <meta property="og:title" content={recipe.title} />
  <meta property="og:description" content={recipe.description} />
  <meta property="og:image" content={recipe.image} />
</svelte:head>

<!-- Header -->
<Navbar>
  <div class="grow pb-2 text-center sm:text-left">
    <a href="/" class="text-2xl font-bold text-primary">Just Recipes</a>
  </div>
  <div class="mx-auto inline-flex gap-4">
    <Search value={searchQuery} action="/recipes" />
    <ThemeControl />
  </div>
</Navbar>

<!-- Main Content -->
<main class="container mx-auto px-4 py-8">
  <!-- Breadcrumb -->
  <div class="breadcrumbs mb-6 text-sm">
    <ul>
      <li><a href="/" class="link-hover">Home</a></li>
      <li><a href="/recipes" class="link-hover">Recipes</a></li>
      <li class="text-base-content/70">{recipe.title}</li>
    </ul>
  </div>

  <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
    <!-- Recipe Header & Image -->
    <div class="lg:col-span-2">
      <!-- Hero Image -->
      <div class="mb-6 overflow-hidden rounded-lg">
        <img src={recipe.image} alt={recipe.title} class="h-64 w-full object-cover md:h-96" />
      </div>

      <!-- Recipe Title & Meta -->
      <div class="mb-6">
        <div class="mb-4 flex flex-wrap items-center gap-4">
          <h1 class="text-3xl font-bold text-base-content md:text-4xl">
            {recipe.title}
          </h1>
          <div class="badge badge-lg badge-primary">{recipe.difficulty}</div>
        </div>

        <p class="mb-4 text-lg text-base-content/80">
          {recipe.description}
        </p>

        <!-- Recipe Stats -->
        <div class="mb-4 flex flex-wrap gap-6 text-base-content/70">
          <div class="flex items-center gap-2">
            <span class="text-xl text-yellow-500">★</span>
            <span class="font-medium">{recipe.rating}</span>
            <span>rating</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-xl">⏱️</span>
            <span class="font-medium">{recipe.prepTime}</span>
            <span>prep</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-xl">🍳</span>
            <span class="font-medium">{recipe.cookTime}</span>
            <span>cook</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-xl">👥</span>
            <span class="font-medium">{recipe.servings}</span>
            <span>servings</span>
          </div>
        </div>

        <!-- Tags -->
        <div class="mb-6 flex flex-wrap gap-2">
          {#each recipe.tags as tag}
            <span class="badge badge-outline">{tag}</span>
          {/each}
        </div>

        <!-- Action Buttons -->
        <div class="flex flex-wrap gap-3">
          <button class="btn btn-primary" onclick={printRecipe}>
            <span class="text-lg">🖨️</span>
            Print Recipe
          </button>
          <button class="btn btn-outline" onclick={shareRecipe}>
            <span class="text-lg">📤</span>
            Share
          </button>
          <button class="btn btn-outline">
            <span class="text-lg">❤️</span>
            Save
          </button>
        </div>
      </div>
    </div>

    <!-- Ingredients Sidebar -->
    <div class="lg:col-span-1">
      <div class="sticky top-4">
        <div class="rounded-lg bg-base-200 p-6">
          <h2 class="mb-4 text-xl font-bold">Ingredients</h2>
          <div class="space-y-3">
            {#each recipe.ingredients as ingredient, index}
              <label class="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  class="checkbox mt-1 checkbox-sm checkbox-primary"
                  checked={checkedIngredients.has(index)}
                  onchange={() => toggleIngredient(index)}
                />
                <span
                  class="flex-1 text-sm leading-relaxed {checkedIngredients.has(index)
                    ? 'text-base-content/50 line-through'
                    : ''}"
                >
                  {ingredient}
                </span>
              </label>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Instructions Section -->
  <div class="mt-8">
    <div class="rounded-lg bg-base-100 p-6 shadow-lg">
      <h2 class="mb-6 text-2xl font-bold">Instructions</h2>
      <div class="space-y-6">
        {#each recipe.instructions as instruction, index}
          <div class="flex gap-4">
            <div class="flex-shrink-0">
              <div
                class="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-content"
              >
                {index + 1}
              </div>
            </div>
            <div class="flex-1">
              <p class="leading-relaxed text-base-content">
                {instruction}
              </p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>

  <!-- Nutrition Info (Optional) -->
  <div class="mt-8">
    <div class="rounded-lg bg-base-200 p-6">
      <h3 class="mb-4 text-lg font-semibold">Recipe Tips</h3>
      <div class="space-y-2 text-sm text-base-content/80">
        <p>• This recipe serves {recipe.servings} people</p>
        <p>• Total time: {parseInt(recipe.prepTime) + parseInt(recipe.cookTime)} minutes</p>
        <p>• Difficulty level: {recipe.difficulty}</p>
        <p>• Can be stored in refrigerator for up to 3 days</p>
      </div>
    </div>
  </div>

  <!-- Back to Search -->
  <div class="mt-8 text-center">
    <a href="/search" class="btn btn-outline"> ← Back to All Recipes </a>
  </div>
</main>

<!-- Print Styles -->
<style>
  @media print {
    :global(.navbar),
    :global(.breadcrumbs),
    :global(.btn),
    :global(.badge) {
      display: none !important;
    }

    .container {
      max-width: none !important;
      padding: 0 !important;
    }

    .grid {
      display: block !important;
    }

    .sticky {
      position: static !important;
    }

    .shadow-lg {
      box-shadow: none !important;
    }

    .bg-base-200,
    .bg-base-100 {
      background: white !important;
      border: 1px solid #ddd !important;
    }
  }
</style>
