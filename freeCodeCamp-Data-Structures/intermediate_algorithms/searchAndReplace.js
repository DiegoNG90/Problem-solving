function myReplace(str, before, after) {
  let transformedAfter = after;
  before[0] === before[0].toUpperCase()
    ? (transformedAfter = after[0].toUpperCase().concat(after.slice(1)))
    : (transformedAfter = after[0].toLowerCase().concat(after.slice(1)));

  return str.replace(before, transformedAfter);
}

console.log(
  myReplace('A quick brown fox jumped over the lazy dog', 'jumped', 'leaped')
);

console.log(myReplace('Let us go to the store', 'store', 'mall')); // should return the string Let us go to the mall.
console.log(myReplace('He is Sleeping on the couch', 'Sleeping', 'sitting')); // should return the string He is Sitting on the couch.
console.log(myReplace('I think we should look up there', 'up', 'Down')); // should return the string I think we should look down there.
console.log(myReplace('This has a spellngi error', 'spellngi', 'spelling')); // should return the string This has a spelling error.
console.log(myReplace('His name is Tom', 'Tom', 'john')); //should return the string His name is John.
console.log(
  myReplace('Let us get back to more Coding', 'Coding', 'algorithms')
); // should return the string Let us get back to more Algorithms.
