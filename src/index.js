function generateRecipe(event){
    event.preventDefault();

   new Typewriter('#recipe', {
    strings: "Here's a quick scrambled eggs recipe",
    autoStart: true,
    delay: 0.5,
    cursor: "",
  });


}

let recipeFormElement = document.querySelector("#recipe-generator-form")
recipeFormElement.addEventListener('submit', generateRecipe)