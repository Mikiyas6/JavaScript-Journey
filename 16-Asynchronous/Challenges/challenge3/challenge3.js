'use strict';

const imageContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const image = document.createElement('img');
    image.src = imgPath;

    image.addEventListener('load', function () {
      imageContainer.append(image);
      resolve(image);
    });

    image.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

// const createImage = async function (imgPath) {
//   try {
//     const image = document.createElement('img');
//     image.src = imgPath;
//     image.addEventListener('load', function () {
//       imageContainer.append(image);
//       return image;
//     });
//     image.addEventListener('error', function () {
//       throw new Error('Image not found');
//     });
//   } catch (err) {
//     throw new Error(`${err.message}`);
//   }
// };

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async imagePath => await createImage(imagePath));
    console.log(imgs);
    const imageElements = await Promise.all(imgs);
    console.log(imageElements);
    imageElements.forEach(function (imageElement) {
      imageElement.classList.add('parallel');
    });
  } catch (err) {
    throw new Error(`${err.message}`);
  }
};

loadAll([
  '../../img/img-1.jpg',
  '../../img/img-2.jpg',
  '../../img/img-3.jpg',
]).catch(err => console.log('Come on'));

// const loadNPause = async function () {
//   try {
//     let currentImage = await createImage('../../img/img-1.jpg');
//     await wait(2);
//     currentImage.style.display = 'none';

//     currentImage = await createImage('../../img/img-2.jpg');
//     await wait(2);
//     currentImage.style.display = 'none';

//     currentImage = await createImage('../../img/img-3.jpg');
//     await wait(2);
//     currentImage.style.display = 'none';
//   } catch (err) {
//     throw new Error(`${err.message}`);
//   }
// };

// loadNPause();
