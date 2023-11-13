function flatten(elements) {
   let flattenedArray = [];
   for(let index=0;index<elements.length;index++){
    if(Array.isArray(elements[index])){
        flattenedArray=flattenedArray.concat(flatten(elements[index]))
    }
    else{
        flattenedArray.push(elements[index])
    }
   }
   return flattenedArray;
}

module.exports = flatten;