import { AUDIO, VIDEO } from "./media.js";
const targetDiv = document.getElementById("target");

const APP_TITLE = "WHO'S THAT POKEMON?";

const MEDIA = {
  WHOS_THAT_POKEMON_MP3: new AUDIO("../assets/whos-that-pokemon-audio.mp3"),
  TO_BE_CONTINUE_MP3: new AUDIO("../assets/to-be-continue.mp3"),
  RICK_ROLL_CLIP: new VIDEO("../assets/rick-roll-clip.mp4"),
};

const { WHOS_THAT_POKEMON_MP3, RICK_ROLL_CLIP } = MEDIA;

const video = RICK_ROLL_CLIP.mp4();

const _createElement = (tag) => document.createElement(tag);

const loadPokemon = _createElement("button");

const FORM = {
  guessForm: _createElement("form"),
  submitGuessButton: _createElement("button"),
  guessInputBox: _createElement("input"),
};

const CONTAINER = {
  appContainerView: _createElement("div"),
  appTitleContanerView: _createElement("div"),
  pokemonContainerView: _createElement("div"),
  formView: _createElement("div"),
  pokemonSprite: _createElement("img"),
  correctAnswerView: _createElement("div"),
};

const {
  appContainerView,
  appTitleContanerView,
  pokemonContainerView,
  formView,
  pokemonSprite,
  correctAnswerView,
} = CONTAINER;

const { guessForm, submitGuessButton, guessInputBox } = FORM;

const _stylePokemonContainer = () => {
  const { style } = pokemonContainerView;
  style.width = "500px";
  style.height = "500px";
  style.display = "flex";
  style.flexDirection = "column";
  style.justifyContent = "space-between";
  style.paddingTop = "40px";
  style.alignItems = "center";
  style.borderTopLeftRadius = "10px";
  style.borderTopRightRadius = "10px";
  style.backgroundColor = "#CFB997";
};

const _styleAppContainer = () => {
  const { style } = appContainerView;
  style.userSelect = "none";
  style.height = "100vh";
  style.width = "100vw";
  style.marginLeft = "auto";
  style.marginRight = "auto";
  style.display = "flex";
  style.flexDirection = "column";
  style.alignItems = "center";
  style.justifyContent = "center";
  style.position = "fixed";
  style.top = "0";
  style.left = "0";
  style.backgroundColor = "#3C4048";
};

const _styleAppTitle = () => {
  const { style } = appTitleContanerView;
  style.fontSize = "50px";
  style.fontWeight = "bold";
  style.paddingBottom = "20px";
  style.color = "#E6CBA8";
};

const _stylePokemonSprite = () => {
  const { style } = pokemonSprite;
  style.width = "420px";
  style.height = "420px";
};

const _styleLoadPokemon = () => {
  const { style } = loadPokemon;
  style.height = "40px";
  style.fontSize = "20px";
  style.fontWeight = "bold";
  style.border = "none";
  style.borderRadius = "5px";
  style.cursor = "pointer";
  style.backgroundColor = "#AA8B56";
  style.color = "#EEEEEE";
};

const _styleFormView = () => {
  const { style } = formView;
  style.width = "500px";
  style.height = "100px";
  style.display = "flex";
  style.justifyContent = "center";
  style.alignItems = "center";
  style.backgroundColor = "#CFB997";
  style.borderBottomLeftRadius = "10px";
  style.borderBottomRightRadius = "10px";
};

const _styleGuessForm = () => {
  const { style } = guessForm;
  style.display = "flex";
  style.justifyContent = "center";
  style.gap = "5px";
};

const _styleGuessInputBox = () => {
  const { style } = guessInputBox;
  style.width = "300px";
  style.height = "40px";
  style.textIndent = "10px";
  style.fontSize = "26px";
  style.fontWeight = "bold";
  style.border = "2px solid white";
  style.borderRadius = "5px";
  style.outline = "none";
  style.color = "#557153";
};

const _styleSubmitGuessButton = () => {
  const { style } = submitGuessButton;
  style.fontSize = "18px";
  style.fontWeight = "bold";
  style.border = "none";
  style.borderRadius = "10px";
  style.cursor = "pointer";
  style.backgroundColor = "#AA8B56";
  style.color = "#EEEEEE";
};

const _styleCorrectAnswerView = () => {
  const { style } = correctAnswerView;
  style.width = "500px";
  style.height = "50px";
  style.marginTop = "15px";
  style.fontSize = "40px";
  style.textAlign = "center";
  style.fontWeight = "bold";
  style.color = "#EEEEEE";
};

const _styleRickRollClip = () => {
  video.height = "400";
  video.width = "400";
  video.style.position = "absolute";
  video.style.visibility = "hidden";
};

const _initializedAppContent = () => {
  appTitleContanerView.textContent = APP_TITLE;
  pokemonSprite.draggable = false;
  pokemonSprite.fetchPriority = "high";
  loadPokemon.textContent = "load pokemon";
  guessInputBox.placeholder = "type your guess here";
  guessInputBox.spellcheck = false;
  submitGuessButton.textContent = "guess";
};

const _styleAppView = () => {
  _styleAppTitle();
  _styleAppContainer();
  _stylePokemonContainer();
  _stylePokemonSprite();
  _styleFormView();
  _styleGuessForm();
  _styleGuessInputBox();
  _styleSubmitGuessButton();
  _styleLoadPokemon();
  _styleCorrectAnswerView();
  _styleRickRollClip();
};

const _renderApp = () => {
  _initializedAppContent();
  _styleAppView();

  appContainerView.append(appTitleContanerView);
  appContainerView.append(pokemonContainerView);
  pokemonContainerView.append(pokemonSprite);
  pokemonContainerView.append(loadPokemon);
  guessForm.append(guessInputBox);
  guessForm.append(submitGuessButton);
  formView.append(guessForm);
  appContainerView.append(formView);
  appContainerView.append(correctAnswerView);
  appContainerView.append(video);
  targetDiv.append(appContainerView);
};

const _loadImage = () => {
  const { style } = pokemonSprite;
  style.visibility = "hidden";
  pokemonSprite.addEventListener("load", () => {
    style.visibility = "visible";
    style.animation = "scaleUp 3.5s";
    pokemonSprite.addEventListener("animationstart", () => {
      loadPokemon.disabled = true;
      WHOS_THAT_POKEMON_MP3.play();
      style.filter = "brightness(0%)";
    });
    pokemonSprite.onanimationend = () => {
      style.animation = "none";
      loadPokemon.disabled = false;
    };
  });
};
export const SetCorrectAnswerContent = (answer) => {
  correctAnswerView.textContent = answer;
};
export const RenderInitialView = () => _renderApp();
export const SetPokemonSprite = (imgURL) => {
  pokemonSprite.src = imgURL;
  _loadImage();
};
export { CONTAINER, FORM, MEDIA, loadPokemon, pokemonSprite, video };
