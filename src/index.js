function displayRecipe(response) {
  console.log("recipe generated");
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 0.1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "d494296b1e5a34o4t344f5460f276a60";
  let prompt = `User instructions : Generate a short recipe based on the following ingredients ${instructionsInput.value}`;
  let context =
    "You are a professional, world-renowned chef and you love to use ingredients to create recipes that are easy to follow. Your mission is to generate a simple, delicious recipe in basic HTML. Make sure to follow the user instructions. Put the title in a <h2> element. Sign the recipe with 'SheCodes AI 🤖' inside a <strong> element at the end";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<h2 class="generating">⏳ GENERATING A RECIPE</h2>`;

  console.log("generating recipe");

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
