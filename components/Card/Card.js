import { caesarCipher13 } from "../../lib/utils.js";

export default function Card(author) {
  // what should author be?
  // author needs to be
  // 1. an object
  // 2. with key "text"
  // 3. with key "name"

  const card = document.createElement("article");
  card.className = "card";

  const title = document.createElement("h2");
  title.className = "card__title";
  title.textContent = author.name;

  const text = document.createElement("p");
  text.className = "card__text";
  text.textContent = caesarCipher13(author.text);

  const button = document.createElement("button");
  button.className = "card__button";
  button.textContent = "Decipher";
  button.addEventListener("click", handleDecipherButtonClick);

  card.append(title, text, button);

  function handleDecipherButtonClick() {
    text.textContent = author.text;
    button.setAttribute("disabled", "");
    card.classList.add("card--deciphered");
  }

  return card;
}
