import { authors } from "./lib/data.js";
import MyLocalHeader from "./components/Header/Header.js";
import Card from "./components/Card/Card.js";

/** Get root element */

const root = document.querySelector("#root");

const myHeaderElement = MyLocalHeader("Hello Sharkies");
const myHeaderElement2 = MyLocalHeader("Bye Sharkies");

root.append(myHeaderElement);
root.append(myHeaderElement2);

// function myForEach(array, doThisAction) {
//   for (const item of array) {
//     doThisAction(item);
//   }
// }

// authors.forEach(function (brokkoli) {
//   const myCardElement = Card(brokkoli);
//   root.append(myCardElement);
// });
//

authors.forEach((author) => {
  const myCardElement = Card(author);
  root.append(myCardElement);
});
