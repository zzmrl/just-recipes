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
      ingredients: ["flour", "sugar", "blueberries", "eggs", "milk"]
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
      ingredients: ["flour", "butter", "chocolate chips", "sugar", "eggs"]
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
      ingredients: ["chicken", "vegetables", "soy sauce", "ginger", "garlic"]
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
      ingredients: ["romaine lettuce", "parmesan", "croutons", "caesar dressing"]
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
      ingredients: ["ground beef", "tortillas", "onions", "tomatoes", "cheese"]
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
      ingredients: ["spaghetti", "eggs", "pancetta", "parmesan", "black pepper"]
    }
  ];
}

export type Recipe = ReturnType<typeof mockRecipes>[number];

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
