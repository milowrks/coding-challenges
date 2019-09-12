function filterList(l) {
  // Return a new array with the strings filtered out
  const results = l.filter(elem => typeof(elem) === "number")
  return results;
}

module.exports = filterList;