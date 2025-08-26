<script lang="ts">
  import { page, navigating } from "$app/state";
  import Navbar from "$lib/components/Navbar.svelte";
  import ThemeControl from "$lib/components/ThemeControl.svelte";
  import Search from "$lib/components/Search.svelte";
  import { createSlug } from "$lib/recipes-api";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();

  const searchQuery = $derived(page.url.searchParams.get("q") || "");

  // State for filters and sorting
  let selectedDifficulty = $state<Difficulty>("all");
  let selectedTags = $state<string[]>([]);
  let sortBy = $state("relevance");
  let loading = $state(false);

  const allTags = [
    "breakfast",
    "dinner",
    "dessert",
    "baking",
    "vegetarian",
    "healthy",
    "asian",
    "mexican",
    "italian",
    "spicy"
  ];
  const difficulties = ["Easy", "Medium", "Hard"] as const;
  type Difficulty = "all" | (typeof difficulties)[number];

  // Apply filters and sorting
  const displayedRecipes = $derived(
    data.recipes
      .filter((recipe) => selectedDifficulty === "all" || recipe.difficulty === selectedDifficulty)
      .filter(
        (recipe) =>
          selectedTags.length === 0 || selectedTags.some((tag) => recipe.tags.includes(tag))
      )
      .sort((a, b) => {
        switch (sortBy) {
          case "rating":
            return b.rating - a.rating;
          case "prepTime":
            return parseInt(a.prepTime) - parseInt(b.prepTime);
          case "title":
            return a.title.localeCompare(b.title);
          default:
            return 0; // relevance - keep original order
        }
      })
  );

  // Handle tag selection
  function toggleTag(tag: string) {
    if (selectedTags.includes(tag)) {
      selectedTags = selectedTags.filter((t) => t !== tag);
    } else {
      selectedTags = [...selectedTags, tag];
    }
  }

  // Clear all filters
  function clearFilters() {
    selectedDifficulty = "all";
    selectedTags = [];
    sortBy = "relevance";
  }
</script>

<svelte:head>
  <title>Search Results - Just Recipes</title>
  <meta name="description" content="Search results for {searchQuery}" />
</svelte:head>

<!-- Header -->
<Navbar>
  <div class="grow text-center sm:pb-0 sm:text-left">
    <a href="/" class="text-2xl font-bold text-primary">Just Recipes</a>
  </div>
  <div class="mx-auto inline-flex gap-4">
    <Search value={searchQuery} action="/recipes" />
    <ThemeControl />
  </div>
</Navbar>

<!-- Main Content -->
<main class="container mx-auto px-4 py-8">
  <div class="breadcrumbs mb-6 text-sm">
    <ul>
      <li><a href="/" class="link-hover">Home</a></li>
      <li class="text-base-content/70">Recipes</li>
    </ul>
  </div>
  <!-- Search Results Header -->
  <div class="mb-8">
    {#if searchQuery}
      <h1 class="mb-2 text-3xl font-bold">
        Search Results for "{searchQuery}"
      </h1>
      <p class="text-base-content/70">
        Found {displayedRecipes.length} recipe{displayedRecipes.length !== 1 ? "s" : ""}
      </p>
    {:else}
      <h1 class="mb-2 text-3xl font-bold">All Recipes</h1>
      <p class="text-base-content/70">
        Browse our collection of {displayedRecipes.length} recipes
      </p>
    {/if}
  </div>

  <div class="grid grid-cols-1 gap-8 lg:grid-cols-4">
    <!-- Filters Sidebar -->
    <aside class="lg:col-span-1">
      <div class="sticky top-4 rounded-lg bg-base-200 p-6">
        <h2 class="mb-4 text-xl font-semibold">Filters</h2>

        <!-- Difficulty Filter -->
        <div class="mb-6">
          <h3 class="mb-3 font-medium">Difficulty</h3>
          <div class="space-y-2">
            <label class="flex items-center">
              <input
                type="radio"
                name="difficulty"
                value="all"
                bind:group={selectedDifficulty}
                class="radio radio-sm radio-primary"
              />
              <span class="ml-2">All</span>
            </label>
            {#each difficulties as difficulty}
              <label class="flex items-center">
                <input
                  type="radio"
                  name="difficulty"
                  value={difficulty}
                  bind:group={selectedDifficulty}
                  class="radio radio-sm radio-primary"
                />
                <span class="ml-2">{difficulty}</span>
              </label>
            {/each}
          </div>
        </div>

        <!-- Tags Filter -->
        <div class="mb-6">
          <h3 class="mb-3 font-medium">Tags</h3>
          <div class="flex flex-wrap gap-2">
            {#each allTags as tag}
              <button
                class="btn btn-xs {selectedTags.includes(tag) ? 'btn-primary' : 'btn-outline'}"
                onclick={() => toggleTag(tag)}
              >
                {tag}
              </button>
            {/each}
          </div>
        </div>

        <!-- Sort Options -->
        <div class="mb-6">
          <h3 class="mb-3 font-medium">Sort By</h3>
          <select bind:value={sortBy} class="select-bordered select w-full select-sm">
            <option value="relevance">Relevance</option>
            <option value="rating">Rating</option>
            <option value="prepTime">Prep Time</option>
            <option value="title">Title</option>
          </select>
        </div>

        <!-- Clear Filters -->
        <button class="btn w-full btn-outline btn-sm" onclick={clearFilters}>
          Clear Filters
        </button>
      </div>
    </aside>

    <!-- Recipe Grid -->
    <div class="lg:col-span-3">
      {#if loading}
        <div class="flex h-64 items-center justify-center">
          <span class="loading loading-lg loading-spinner"></span>
        </div>
      {:else if displayedRecipes.length === 0}
        <div class="py-12 text-center">
          <div class="mb-4 text-6xl">🍽️</div>
          <h2 class="mb-2 text-2xl font-semibold">No recipes found</h2>
          <p class="mb-6 text-base-content/70">
            {#if searchQuery}
              Try adjusting your search terms or filters
            {:else}
              No recipes match your current filters
            {/if}
          </p>
          <button class="btn btn-primary" onclick={clearFilters}> Clear Filters </button>
        </div>
      {:else}
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {#each displayedRecipes as recipe (recipe.id)}
            <article class="card bg-base-100 shadow-lg transition-shadow hover:shadow-xl">
              <figure class="h-48">
                <img src={recipe.image} alt={recipe.title} class="h-full w-full object-cover" />
              </figure>
              <div class="card-body">
                <div class="mb-2 flex items-start justify-between">
                  <h3 class="card-title text-lg">{recipe.title}</h3>
                  <div class="badge badge-primary">{recipe.difficulty}</div>
                </div>

                <p class="mb-3 line-clamp-2 text-sm text-base-content/70">
                  {recipe.description}
                </p>

                <div class="mb-3 flex items-center gap-4 text-sm text-base-content/70">
                  <div class="flex items-center gap-1">
                    <span class="text-yellow-500">★</span>
                    <span>{recipe.rating}</span>
                  </div>
                  <div class="flex items-center gap-1">
                    <span>⏱️</span>
                    <span>{recipe.prepTime}</span>
                  </div>
                  <div class="flex items-center gap-1">
                    <span>👥</span>
                    <span>{recipe.servings}</span>
                  </div>
                </div>

                <div class="mb-4 flex flex-wrap gap-1">
                  {#each recipe.tags as tag}
                    <span class="badge badge-outline badge-sm">{tag}</span>
                  {/each}
                </div>

                <div class="card-actions justify-end">
                  <a href="/recipes/{createSlug(recipe.title)}" class="btn btn-sm btn-primary">
                    View Recipe
                  </a>
                </div>
              </div>
            </article>
          {/each}
        </div>
      {/if}
    </div>
  </div>
</main>

<style>
  .line-clamp-2 {
    display: -webkit-box;
    line-clamp: 2;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>
