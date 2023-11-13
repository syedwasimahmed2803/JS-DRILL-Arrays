function map(elements, cb) {
    const newArr=[]
  for(let index=0;index<elements.length;index++)
  {
    newArr.push(cb(elements[index]))
  }
return newArr;
}

module.exports = map;