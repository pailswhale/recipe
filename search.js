document.addEventListener('DOMContentLoaded', function() {
    // Use search.css
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'search.css'; 
    document.head.appendChild(link);

    // Recipes and keywords
    const recipes = [
        { title: "Apple Pie", keywords: ["apple", "pie", "dessert", "cinnamon", "flaky crust"], link: "apple_pie.html" },
        { title: "Bruschetta", keywords: ["bruschetta", "appetizer", "tomato", "basil", "bread"], link: "bruschetta.html" },
        { title: "Cheesecake", keywords: ["cheesecake", "dessert", "creamy", "vanilla", "cake"], link: "cheesecake.html" },
        { title: "Chicken Parmesan", keywords: ["chicken", "parmesan", "italian", "crispy", "cheese"], link: "chicken_parmesan.html" },
        { title: "Chocolate Cake", keywords: ["chocolate", "cake", "dessert", "moist", "cocoa"], link: "chocolate_cake.html" },
        { title: "Cucumber Mint Cooler", keywords: ["cucumber", "mint", "cooler", "refreshing", "beverage"], link: "cucumber_mint_cooler.html" },
        { title: "Deviled Eggs", keywords: ["deviled eggs", "appetizer", "eggs", "creamy", "mustard"], link: "deviled_eggs.html" },
        { title: "Spaghetti", keywords: ["spaghetti", "italian", "pasta", "tomato sauce", "cheese"], link: "spaghetti.html" },
        { title: "Strawberry Lemonade", keywords: ["strawberry", "lemonade", "refreshing", "summer", "citrus"], link: "strawberry_lemonade.html" },
        { title: "Stuffed Mushrooms", keywords: ["stuffed mushrooms", "appetizer", "cheese", "garlic", "mushrooms"], link: "stuffed_mushrooms.html" },
        { title: "Vegetable Stir Fry", keywords: ["vegetable stir fry", "stir fry", "vegetables", "soy sauce", "healthy"], link: "vegetable_stir_fry.html" },
        { title: "Virgin Mojito", keywords: ["virgin mojito", "beverage", "mint", "lime", "refreshing"], link: "virgin_mojito.html" }
    ];

    // Get search input field
    const searchInput = document.querySelector('.search-bar');
    const recipeContainer = document.querySelector('#recipe-list');

    // Hide until user starts typing
    recipeContainer.style.display = 'none';

    // Event listener to the search input field
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase().trim(); 

        // If query is empty, hide recipes container
        if (query === '') {
            recipeContainer.innerHTML = ''; // Clear previously displayed results
            recipeContainer.style.display = 'none'; // Hide container
        } else {
            // Filter recipes based on search query
            const filteredRecipes = recipes.filter(recipe => {
                return recipe.keywords.some(keyword => keyword.toLowerCase().includes(query));
            });

            displayRecipes(filteredRecipes);
        }
    });

    // Display filtered recipes
    function displayRecipes(filteredRecipes) {
        recipeContainer.innerHTML = ''; // Clear current list

        // If no recipes match 
        if (filteredRecipes.length === 0) {
            recipeContainer.innerHTML = '<p>No recipes found.</p>';
        } else {
            // Add filtered recipes to container
            filteredRecipes.forEach(recipe => {
                const recipeElement = document.createElement('div');
                recipeElement.classList.add('recipe');
                recipeElement.innerHTML = `<h2>${recipe.title}</h2>`;

                // Click on recipe to go to recipe page
                recipeElement.addEventListener('click', function() {
                    window.location.href = recipe.link; // Go to recipe page
                });

                recipeContainer.appendChild(recipeElement);
            });
        }

        recipeContainer.style.display = 'block';
    }
});
