async function getImageDimension(image) {
  // let dimensions = {
  //   width: 0,
  //   height: 0
  // }
  return new Promise (function(resolve, reject) {
    const img = new Image()
    img.onload = function() {
      resolve({ width: this.width, height: this.height });
    }
    img.onerror = function() {
      reject({ width: 0, height: 0 })
    }
    img.src = image
  })
}

function calcAverageDimensions(dimensions) {
  const averageDimensions = {
    width: 0,
    height: 0
  }
  return dimensions.reduce((total, currentImage, index, dimensions) => {
    total.width += currentImage.width;
    total.height += currentImage.height;
    if (index === dimensions.length - 1) {
      return {
        width: total.width/dimensions.length,
        height: total.height/dimensions.length
      }
    } else {
      return total
    }
  }, averageDimensions)
}

async function loadImages(images) {
  return Promise.all(images.map(image => getImageDimension(image)))
}

const imageUrls = [
  'https://www.w3schools.com/html/pic_trulli.jpg',
  'https://www.w3schools.com/html/img_girl.jpg',
  'https://www.w3schools.com/html/img_chania.jpg',
  'https://www.w3schools.com/html/workplace.jpg',
  'https://www.w3schools.com/w3css/img_snowtops.jpg',		
]

console.log(calcAverageDimensions([{width: 500, height: 300}, {width: 400, height: 200}]))
console.log(loadImages(imageUrls))