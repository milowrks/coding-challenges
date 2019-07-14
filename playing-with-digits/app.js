function digPow(n, p) {
  let digits = n
    .toString()
    .split("")
    .map(digit => parseInt(digit))
  let total = digits.reduce(function(accum, digit, i) {
    return accum + Math.pow(digit, p+i)
  }, 0)
  if (total % n === 0) {
    return total / n
  } else {
    return -1
  }
}

module.exports = digPow