function validBracesOG(braces){
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
  const typesOfBraces = [["(", ")"], ["{", "}"], ["[", "]"]];
  // loop through brace types
  const results = typesOfBraces.map(type => {
    // check if string includes both opening and closing brace
    if (braces.includes(type[0]) && braces.includes(type[1])) {
      // yes => get the string between first opening and last closing brace
      const content = braces.slice(braces.indexOf(type[0]) + 1, braces.lastIndexOf(type[1]))
      debugger
      // check if in-between is empty
      if (content === "") {
        // yes => true
        return true;
      } else {
        // no => recursively call validBraces
        validBraces(content);
      }
      // no => check if string includes either brace
    } else if (braces.includes(type[0]) || braces.includes(type[1])) {
      // yes => return false
      return false;
    } else {
      // no => return true
      debugger
    }
  })
  return results.filter(result => result === false).length === 0;
}