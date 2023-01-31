const Jimp = require('jimp');

Jimp.read('image.jpeg', (err, image) => {
  if(err) throw err;
  image
    .resize(300, 200)
    .write('image-modified.jpeg')
})
