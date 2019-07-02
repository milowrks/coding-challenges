// return masked string
function maskify(cc) {
  debugger
  let chars = cc.split("")
  if (chars.length > 4) {
    let charsMasked = chars.map((char, index) => {
      if (index < chars.length - 4) {
        return "#"
      } else {
        return char
      }
    })
    return charsMasked.join("")
  } else {
    return cc
  }
}

maskify("12345")

module.exports = maskify

// j o n s n o w
// 0 1 2 3 4 5 6
// # # # s n o w