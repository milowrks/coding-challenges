function validBraces(braces){
  // define 3 types of braces
  const typesOfBraces = [["(", ")"], ["{", "}"], ["[", "]"]];
  const results = typesOfBraces.map(type => {
    // check if string includes any of the opening braces
    if (braces.includes(type[0])) {
      // yes => get index numbers of the opening brace and matching closing brace
        const openBrace = type[0];
        const closeBrace = type[1];
        const openBraceIndexes = braces
          .split("")
          .reduce((arr, elem, i) => {
            elem === openBrace && arr.push(i);
            return arr;
          }, [])
          .sort();
        const closeBraceIndexes =braces
          .split("")
          .reduce((arr, elem, i) => {
            elem === closeBrace && arr.push(i);
            return arr;
          }, [])
          .sort();
          // check if number of opening and closing braces match
        if (openBraceIndexes.length === closeBraceIndexes.length) {
          // yes => sort index numbers and check if each opening brace index < closing brace index at position
          for (let i = 0; i < openBraceIndexes.length; i++) {
            if (openBraceIndexes[i] < closeBraceIndexes[i]) {
              // yes => return true
              return true;
            } else {
              // no => return false
              return false;
            }
          }
        } else {
          // no => return false
          return false;
        }
    } else if (braces.includes(type[1])) {
      // no => return false
      return false;
    }
  })
  return results.filter(result => result === false).length === 0;
}

function validBraces(braces) {
  // define 3 types of braces
  // loop through brace types
    // check if string includes both opening and closing brace
    // yes => split the string by first opening and last closing brace
    // check if in-between is empty
      // yes => true
      // no => recursively call validBraces
    // no => check if string includes opening brace
      // yes => return false
      // no => return true
}