function filter(elements, cb) {
  let filteredArray = [];
  for (let index = 0; index < elements.length; index++) {
    if (cb(elements[index])) {
      filteredArray.push(elements[index]);
    }
  }
  return filteredArray;
}
module.exports = filter;
