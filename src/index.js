function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "38a37b7f968a5o1f64a7f0dbaftb8064";
  let prompt =
    "User instructions: Generate a French a poem about ${instructionsInput.value}";
  let context =
    "You are a romatic poem expert and love to write short poems. Your mission is to generate a four line poem in basic HTML and separate each line with a <br/>. Make sure to follow the user instructions. Don't include a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong> strong element. ";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating"> Generating a French poem about ${instructionsInput.value} </div>`;

  console.log("Generating a poem");
  console.log("Prompt: ${prompt}");
  console.log("Context: ${context}");

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
