import recipes from './recipes.js';

function random(num) {
	return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
	const listLength = list.length;
	const randomNum = random(listLength);
	return list[randomNum];
}

function tagsTemplate(tags) {
    let html = '';
    for (let tag of tags) {
        html += `<li>${tag}</li>`;
    }
	return html;
}

function ratingTemplate(rating) {
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
>`
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        } else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }
	html += `</span>`
	return html
}

function recipeTemplate(recipe) {
	return `<div class="recipe">
                <a href="#"><img src="${recipe.image}" alt="${recipe.name}" fetchpriority=high></a>
                <div class="recipe-content">
                    <span class="category">${tagsTemplate(recipe.tags)}</span>

                    <h2>${recipe.name}</h2>

                    ${ratingTemplate(recipe.rating)}

                    <p>${recipe.description}</p>

                </div>
            </div>`;
}

function renderRecipes(recipeList) {
	const outputElement = document.getElementById('recipes-container');
    let recipeHTMLStrings = [];
    for (let recipe of recipeList) {
        recipeHTMLStrings.push(recipeTemplate(recipe));
    }
    outputElement.innerHTML = recipeHTMLStrings.join('\n');
}

function filterRecipes(query){
    let outputList = recipes.filter((recipe) => {
        const lowerCaseQuery = query.toLowerCase();
        const nameMatch = recipe.name.toLowerCase().includes(lowerCaseQuery);
        const tagMatch = recipe.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery));
        const descriptionMatch = recipe.description.toLowerCase().includes(lowerCaseQuery);
        const ingredientsMatch = recipe.recipeIngredient.some(ingredient => ingredient.toLowerCase().includes(lowerCaseQuery));
        return nameMatch || tagMatch || descriptionMatch || ingredientsMatch;
    });
    return outputList;
}

function handleSearch(event) {
    event.preventDefault();
    const searchInput = document.getElementById('search-bar');
    const query = searchInput.value;
    const filteredRecipes = filterRecipes(query);
    renderRecipes(filteredRecipes);
}

const searchForm = document.getElementById('search-form');
searchForm.addEventListener('submit', handleSearch);