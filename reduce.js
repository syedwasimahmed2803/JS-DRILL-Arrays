function reduce(elements, cb, startingValue) {
    let accumulator;
    let index;
  if (startingValue !== undefined) {
    accumulator = startingValue;
    index=0;
  } else {
    accumulator = elements[0];
    index=1;
  }
  for (index; index < elements.length; index++) {
    accumulator = cb(accumulator, elements[index]);
  }

  return accumulator;
}

module.exports = reduce;
