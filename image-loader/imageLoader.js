async function getImageDimension(image) {
  // let dimensions = {
  //   width: 0,
  //   height: 0
  // }
  return new Promise (function(resolve, reject) {
    const img = new Image();
    img.onload = function() {
      resolve({ width: this.width, height: this.height });
    }
    img.onerror = function() {
      reject({ width: 0, height: 0 })
    }
    img.src = image
  })
}

async function loadImages(images) {

  // map each image in array into dimensions object
    // resolve => 
    // reject => catch dimension: 0 0

  // reduce the mapped array into a average dimensions object
		
}