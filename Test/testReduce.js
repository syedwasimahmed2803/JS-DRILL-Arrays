const reduce = require("../reduce");
const {items} = require("../testArray");
const lastCharacter = reduce(items, function (accumulator, currentElement) {
  return currentElement;
});

console.log(lastCharacter);
const sum = reduce(
  items,
  (accumulator, currentElement) => accumulator + currentElement,
  0
);

console.log(sum);
