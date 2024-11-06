function displayRecipe(response) {
    new Typewriter('#recipe', {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
      });
    

}


function generateRecipe(event){
    event.preventDefault();
    
    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "dfd0t6478f0367aa31fdf9o1c7ab1790";
    let prompt = `Generate a recipe out of these ingredients ${instructionsInput.value}`
    let context = "You are an experienced chef in a cafe who loves to cook quick and tasty vegetarian food. Your mission is to generate a recipe that is easy to follow, and include maximum 5 ingredients. Separate the recipe in a readable way. I want ingredients to be in bullet points in basic HTML and separate each line with a <br /> above instructions. Make sure to follow the user instructions. Sign the recipe with 'Paulina AI' inside a <strong> element at the end of the recipe and NOT at the beginning. Dont use #";
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`; 
    

    console.log("Generating recipe");
    console.log(`Prompt: ${prompt}`);
    console.log(`Context: ${context}`);

    axios.get(apiURL).then(displayRecipe);
  

}

let recipeFormElement = document.querySelector("#recipe-generator-form")
recipeFormElement.addEventListener('submit', generateRecipe)