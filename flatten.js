function flatten(elements) {
   let newArr = [];
   for(let index=0;index<elements.length;index++){
    if(Array.isArray(elements[index])){
        newArr=newArr.concat(flatten(elements[index]))
    }
    else{
        newArr.push(elements[index])
    }
   }
   return newArr;
}

module.exports = flatten;