function map(elements, cb) {
    const mappedArray=[]
  for(let index=0;index<elements.length;index++)
  {
    mappedArray.push(cb(elements[index]))
  }
return mappedArray;
}

module.exports = map;