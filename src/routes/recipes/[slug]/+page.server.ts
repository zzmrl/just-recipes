import { error } from "@sveltejs/kit";
import { getRecipeBySlug } from "$lib/recipes-api";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
  const recipe = await getRecipeBySlug(params.slug);

  if (!recipe) {
    throw error(404, "Recipe not found");
  }

  return {
    recipe
  };
};
