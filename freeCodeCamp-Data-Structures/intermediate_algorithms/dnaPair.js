function pairElement(str) {
  const strArr = str.split('');
  const validDNAPairs = {
    C: ['C', 'G'],
    G: ['G', 'C'],
    A: ['A', 'T'],
    T: ['T', 'A'],
  };
  const validDNAPairsKeys = Object.keys(validDNAPairs);

  const reducedArr = strArr.reduce((arrayOfPairs, currentNucleoBase) => {
    for (let i = 0; i < validDNAPairsKeys.length; i++) {
      if (validDNAPairsKeys[i].includes(currentNucleoBase)) {
        arrayOfPairs.push(validDNAPairs[validDNAPairsKeys[i]]);
      }
    }
    return arrayOfPairs;
  }, []);

  return reducedArr;
}

console.log(pairElement('GCG')); // should return [["G", "C"], ["C","G"], ["G", "C"]]

console.log(pairElement('ATCGA')); // should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
console.log(pairElement('TTGAG')); // should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
console.log(pairElement('CTCTA')); // should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
