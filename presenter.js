import {
  RenderInitialView,
  FORM,
  loadPokemon,
  SetPokemonSprite,
  SetCorrectAnswerContent,
  CONTAINER,
  MEDIA,
  video,
} from "./view.js";
import { getPokemon } from "./model.js";

const POKEMON_ON_INITIAL_RENDER = await getPokemon();
let Pokemon = {
  name: POKEMON_ON_INITIAL_RENDER[0], // POKEMON NAME
  sprite: POKEMON_ON_INITIAL_RENDER[1], //POKEMON SPRITE
};

export default class Presenter {
  constructor() {
    SetPokemonSprite(Pokemon.sprite);
    RenderInitialView();
  }

  UpdateUI() {
    this.#handleLoadPokemon();
    this.#handleSubmit();
  }

  #handleLoadPokemon() {
    loadPokemon.addEventListener("click", async () => {
      const [_name, _sprite] = await getPokemon();
      Pokemon.name = _name;
      Pokemon.sprite = _sprite;
      SetPokemonSprite(Pokemon.sprite);
      CONTAINER.correctAnswerView.style.visibility = "hidden";
    });
  }

  #handleSubmit() {
    const { guessForm, guessInputBox, submitGuessButton } = FORM;
    const { pokemonSprite, correctAnswerView } = CONTAINER;
    const { RICK_ROLL_CLIP, TO_BE_CONTINUE_MP3 } = MEDIA;
    guessForm.onsubmit = (event) => {
      event.preventDefault();
      if (!guessInputBox) return; //Checks if input box is empty

      let guess = guessInputBox.value; //Assigning the value of input box to guess
      let { name } = Pokemon; // Name of random Pokemon
      if (guess === name) {
        SetCorrectAnswerContent("correct guess"); //Comparing guess to pokemon name
        pokemonSprite.style.filter = "brightness(100%)";
        correctAnswerView.style.visibility = "visible";
        correctAnswerView.style.backgroundColor = "#5F8D4E";
        correctAnswerView.style.animation = "slidein 5s";
        correctAnswerView.onanimationend = () =>
          (correctAnswerView.style.animation = "none");
        TO_BE_CONTINUE_MP3.play();
      } else {
        correctAnswerView.style.visibility = "visible";
        guessInputBox.disabled = true;
        submitGuessButton.disabled = true;
        loadPokemon.disabled = true;

        correctAnswerView.style.animation = "rotate-and-scale-up 2s";
        correctAnswerView.onanimationend = () =>
          (correctAnswerView.style.animation = "none");

        RICK_ROLL_CLIP.play();
        video.style.visibility = "visible";
        video.onended = () => {
          RICK_ROLL_CLIP.reset();
          video.style.visibility = "hidden";
          guessInputBox.disabled = false;
          submitGuessButton.disabled = false;
          loadPokemon.disabled = false;
        };

        correctAnswerView.style.backgroundColor = "#E0144C";
        SetCorrectAnswerContent("wrong guess");
      }

      FORM.guessInputBox.value = "";
    };
  }
}
