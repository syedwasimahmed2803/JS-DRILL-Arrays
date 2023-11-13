function filter(elements, cb) {
  let newArr = [];
  for (let index = 0; index < elements.length; index++) {
    if (cb(elements[index])) {
      newArr.push(elements[index]);
    }
  }
  return newArr;
}
module.exports = filter;
