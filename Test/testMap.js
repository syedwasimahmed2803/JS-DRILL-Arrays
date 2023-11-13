const map = require("../map")
const {items} = require("../testArray")
const testMap = map(items, function(item) {
    return item ;
  });
  console.log(testMap)
  
