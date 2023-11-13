const each = require("../each");
const { items } = require("../testArray");
console.log("User Defined Each Function")
const testEach = each(items, (item) => console.log(item));
console.log("In built JS forEach Function")
const test = items.forEach((element) => {
  console.log(element);
});
// each(items, (element, index) => {
//     console.log(element);
//   });
