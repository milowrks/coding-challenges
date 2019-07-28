async function getImageDimension(image) {
  return new Promise (function(resolve, reject) {
    const img = new Image()
    img.onload = function() {
      resolve({ width: this.width, height: this.height });
    }
    img.onerror = function() {
      reject(new Error('Image failed to load.'))
    }
    img.src = image
  })
}

function calcAverageDimensions(dimensions) {
  const averageDimensions = {
    width: 0,
    height: 0
  }
  return dimensions
    // .filter(image => image.width > 0)
    .reduce((total, currentImage, index, dimensions) => {
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

  let failedImage

  const promises = images.map(image => getImageDimension(image))
  
  const resolvedPromises = Promise.all(promises.map(p => p.catch(e => failedImage)))
  .then(values => values.filter(v => v !== failedImage))
  
  return resolvedPromises.then(dimensions => calcAverageDimensions(dimensions))
}

const imageUrls = [
  'https://www.w3schools.com/html/pic_trulli.jpg',
  'https://www.w3schools.com/html/img_girrl.jpg',
  'https://www.w3schools.com/html/img_chania.jpg',
  'https://www.w3schools.com/html/workplace.jpg',
  'https://www.w3schools.com/w3css/img_snowtops.jpg',		
]

console.log(loadImages(imageUrls))