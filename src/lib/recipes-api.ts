function mockRecipes() {
  return [
    {
      id: 1,
      title: "Blueberry Muffins",
      description: "Delicious homemade blueberry muffins with a golden brown top",
      prepTime: "15 min",
      cookTime: "25 min",
      servings: 12,
      difficulty: "Easy",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1607958996338-9c5b0c0c0c0c?w=400&h=300&fit=crop",
      tags: ["breakfast", "baking", "vegetarian"],
      ingredients: [
        "2 cups all-purpose flour",
        "3/4 cup granulated sugar",
        "2 teaspoons baking powder",
        "1/2 teaspoon salt",
        "1/3 cup melted butter",
        "1 large egg",
        "1 cup milk",
        "1 cup fresh blueberries"
      ],
      instructions: [
        "Preheat oven to 400°F (200°C). Grease a 12-cup muffin tin.",
        "In a large bowl, whisk together flour, sugar, baking powder, and salt.",
        "In another bowl, combine melted butter, egg, and milk.",
        "Pour wet ingredients into dry ingredients and stir just until combined.",
        "Gently fold in blueberries.",
        "Divide batter evenly among muffin cups.",
        "Bake for 20-25 minutes or until golden brown and a toothpick comes out clean.",
        "Cool in pan for 5 minutes before removing to wire rack."
      ]
    },
    {
      id: 2,
      title: "Chocolate Chip Cookies",
      description: "Classic chocolate chip cookies with crispy edges and chewy centers",
      prepTime: "10 min",
      cookTime: "12 min",
      servings: 24,
      difficulty: "Easy",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop",
      tags: ["dessert", "baking", "vegetarian"],
      ingredients: [
        "2 1/4 cups all-purpose flour",
        "1 cup butter, softened",
        "3/4 cup granulated sugar",
        "3/4 cup brown sugar",
        "2 large eggs",
        "2 teaspoons vanilla extract",
        "1 teaspoon baking soda",
        "1 teaspoon salt",
        "2 cups chocolate chips"
      ],
      instructions: [
        "Preheat oven to 375°F (190°C).",
        "In a bowl, cream together butter and sugars until light and fluffy.",
        "Beat in eggs one at a time, then vanilla.",
        "In separate bowl, whisk flour, baking soda, and salt.",
        "Gradually mix dry ingredients into wet ingredients.",
        "Stir in chocolate chips.",
        "Drop rounded tablespoons of dough onto ungreased baking sheets.",
        "Bake 9-11 minutes or until golden brown.",
        "Cool on baking sheet for 2 minutes before removing to wire rack."
      ]
    },
    {
      id: 3,
      title: "Chicken Stir Fry",
      description: "Quick and healthy chicken stir fry with fresh vegetables",
      prepTime: "20 min",
      cookTime: "15 min",
      servings: 4,
      difficulty: "Medium",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop",
      tags: ["dinner", "asian", "healthy"],
      ingredients: [
        "1 lb boneless chicken breast, sliced thin",
        "2 cups mixed vegetables (bell peppers, broccoli, carrots)",
        "3 tablespoons soy sauce",
        "2 tablespoons vegetable oil",
        "2 cloves garlic, minced",
        "1 tablespoon fresh ginger, minced",
        "1 tablespoon cornstarch",
        "2 green onions, chopped",
        "Cooked rice for serving"
      ],
      instructions: [
        "Heat 1 tablespoon oil in a large wok or skillet over high heat.",
        "Add chicken and cook until no longer pink, about 5-7 minutes.",
        "Remove chicken and set aside.",
        "Add remaining oil to pan, then add vegetables.",
        "Stir-fry vegetables for 3-4 minutes until crisp-tender.",
        "Add garlic and ginger, cook for 30 seconds.",
        "Return chicken to pan.",
        "Mix soy sauce and cornstarch, add to pan and toss to combine.",
        "Cook for 1-2 minutes until sauce thickens.",
        "Garnish with green onions and serve over rice."
      ]
    },
    {
      id: 4,
      title: "Caesar Salad",
      description: "Fresh Caesar salad with homemade dressing and croutons",
      prepTime: "15 min",
      cookTime: "0 min",
      servings: 4,
      difficulty: "Easy",
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop",
      tags: ["salad", "healthy", "vegetarian"],
      ingredients: [
        "1 large head romaine lettuce, chopped",
        "1/2 cup grated Parmesan cheese",
        "1 cup croutons",
        "1/4 cup mayonnaise",
        "2 tablespoons lemon juice",
        "2 cloves garlic, minced",
        "1 teaspoon Dijon mustard",
        "2 anchovy fillets, minced (optional)",
        "Salt and pepper to taste"
      ],
      instructions: [
        "Wash and dry romaine lettuce thoroughly.",
        "Chop lettuce into bite-sized pieces and place in large bowl.",
        "For dressing, whisk together mayonnaise, lemon juice, garlic, mustard, and anchovies.",
        "Season dressing with salt and pepper.",
        "Pour dressing over lettuce and toss to coat.",
        "Add Parmesan cheese and croutons.",
        "Toss gently and serve immediately."
      ]
    },
    {
      id: 5,
      title: "Beef Tacos",
      description: "Authentic Mexican beef tacos with fresh toppings",
      prepTime: "25 min",
      cookTime: "20 min",
      servings: 6,
      difficulty: "Medium",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop",
      tags: ["mexican", "dinner", "spicy"],
      ingredients: [
        "1 lb ground beef",
        "12 small corn tortillas",
        "1 medium onion, diced",
        "2 tomatoes, diced",
        "1 cup shredded Mexican cheese",
        "1 packet taco seasoning",
        "1/2 cup water",
        "Lettuce, shredded",
        "Sour cream",
        "Salsa",
        "Lime wedges"
      ],
      instructions: [
        "Heat a large skillet over medium-high heat.",
        "Add ground beef and cook until browned, breaking up with spoon.",
        "Drain excess fat.",
        "Add taco seasoning and water, simmer for 5 minutes.",
        "Warm tortillas in microwave or dry skillet.",
        "Fill each tortilla with beef mixture.",
        "Top with onions, tomatoes, cheese, and lettuce.",
        "Serve with sour cream, salsa, and lime wedges."
      ]
    },
    {
      id: 6,
      title: "Pasta Carbonara",
      description: "Creamy Italian pasta carbonara with pancetta and parmesan",
      prepTime: "10 min",
      cookTime: "20 min",
      servings: 4,
      difficulty: "Medium",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop",
      tags: ["italian", "pasta", "dinner"],
      ingredients: [
        "12 oz spaghetti",
        "4 large eggs",
        "4 oz pancetta, diced",
        "1 cup grated Pecorino Romano cheese",
        "Freshly cracked black pepper",
        "Salt",
        "2 cloves garlic, minced"
      ],
      instructions: [
        "Bring large pot of salted water to boil and cook spaghetti according to package directions.",
        "While pasta cooks, heat pancetta in large skillet until crispy.",
        "Add garlic and cook for 1 minute.",
        "In bowl, whisk together eggs and cheese.",
        "Reserve 1 cup pasta water, then drain pasta.",
        "Add hot pasta to skillet with pancetta.",
        "Remove from heat and quickly stir in egg mixture, adding pasta water as needed.",
        "Toss until creamy sauce forms.",
        "Season with salt and lots of black pepper.",
        "Serve immediately with extra cheese."
      ]
    }
  ];
}

export type Recipe = {
  id: number;
  title: string;
  description: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  difficulty: string;
  rating: number;
  image: string;
  tags: string[];
  ingredients: string[];
  instructions: string[];
};

export async function getRecipes(): Promise<Recipe[]> {
  return mockRecipes();
}

export async function searchRecipes(query: string = ""): Promise<Recipe[]> {
  const recipes = mockRecipes();

  return query
    ? recipes.filter(
        (recipe) =>
          recipe.title.toLowerCase().includes(query.toLowerCase()) ||
          recipe.description.toLowerCase().includes(query.toLowerCase()) ||
          recipe.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase())) ||
          recipe.ingredients.some((ingredient) =>
            ingredient.toLowerCase().includes(query.toLowerCase())
          )
      )
    : recipes;
}

export function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export async function getRecipeBySlug(slug: string): Promise<Recipe | null> {
  const recipes = mockRecipes();
  const recipe = recipes.find((r) => createSlug(r.title) === slug);
  return recipe || null;
}

export async function getRecipeById(id: number): Promise<Recipe | null> {
  const recipes = mockRecipes();
  const recipe = recipes.find((r) => r.id === id);
  return recipe || null;
}
