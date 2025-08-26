import { searchRecipes } from "$lib/recipes-api";
import type { PageServerLoad } from "../search/$types";

export const load: PageServerLoad = async ({ url }) => {
  const query = url.searchParams.get("q") || "";

  return {
    recipes: await searchRecipes(query)
  };
};
