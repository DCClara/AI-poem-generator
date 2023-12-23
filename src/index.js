function displayRecipe(response) {
  console.log("recipe generated");
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 0.5,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "d494296b1e5a34o4t344f5460f276a60";
  let prompt = `User instructions : Generate a recipe based on the following ingredients ${instructionsInput.value}`;
  let context =
    "You are a professional, world-renowned chef and you love to use ingredients to create recipes that are easy to follow. Your mission is to generate a delicious recipe in basic HTML. Make sure to follow the user instructions. Sign the recipe with 'SheCodes AI' inside a <strong> element at the end";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating recipe");

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
