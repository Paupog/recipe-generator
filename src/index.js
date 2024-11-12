function displayRecipe(response) {
    console.log("recipe generated");
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
    let prompt = `Generate a recipe out of these ingredients ${instructionsInput.value}`;
    let context = `
You are an experienced chef and recipe writer. Format the recipe using basic HTML tags as follows but do not mention "HTML" in the text itself.

1. Start with the recipe title, making it bold and larger using strong tags.
2. Directly below the title, add a bold label "Ingredients" with colon after that word, and list each ingredient as a bullet point using ul and li tags.
3. After the ingredients, add a bold label "Instructions" and format each step as a numbered list using ol and li tags, with each step on a new line.
4. At the end, sign off with "Paulina AI" in bold using strong tags.

Please follow this exact structure without mentioning the word "HTML" in the final text.`;

let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`; 
    
let recipeElement = document.querySelector("#recipe");
    recipeElement.classList.remove("hidden");
    recipeElement.innerHTML = `<dic class="generating">⏳Generating a recipe with: ${instructionsInput.value}`;


    axios.get(apiURL).then(displayRecipe);
  

}

let recipeFormElement = document.querySelector("#recipe-generator-form")
recipeFormElement.addEventListener('submit', generateRecipe);