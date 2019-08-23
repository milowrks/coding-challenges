function validBraces(braces){
  // define 3 types of braces
  const typesOfBraces = [["(", ")"], ["{", "}"], ["[", "]"]];
  typesOfBraces.forEach(type => {
    // check if string includes any of the opening braces
    if (braces.includes(type[0])) {
      // yes => get index numbers of the opening brace and matching closing brace
        const openBrace = type[0];
        const closeBrace = type[1];
        const openBraceIndexes = 
          braces.split("")
          .reduce((arr, elem, i) => {
            elem === openBrace && arr.push(i);
            return arr;
          }, []);
        const closeBraceIndexes =
          braces.split("")
          .reduce((arr, elem, i) => {
            elem === closeBrace && arr.push(i);
            return arr;
          }, []);
        debugger
        // check if number of opening and closing braces match
          // yes => sort index numbers and check if each opening brace index < closing brace index at position
            // yes => return true
            // no => return false
          // no => return false
    } else {
      // no => return false
      return false;
    }
  })
}