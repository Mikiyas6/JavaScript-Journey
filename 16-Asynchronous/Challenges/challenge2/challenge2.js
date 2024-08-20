'use strict';

const imageContainer = document.querySelector('.images');

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const image = document.createElement('img');
    image.src = imgPath;

    // Listen for the 'load' event
    image.addEventListener('load', function () {
      imageContainer.append(image);
      resolve(image); // Resolve the promise with the image element
    });

    // Listen for the 'error' event
    image.addEventListener('error', function () {
      reject(new Error("There's an error when loading the image")); // Reject the promise with an error
    });
  });
};

let currentImage;

createImage('../../img/img-1.jpg')
  .then(function (image) {
    currentImage = image;
    return wait(2);
  })
  .then(function () {
    console.log('Waited 2 seconds');
    currentImage.style.display = 'none';
    return createImage('../../img/img-2.jpg');
  })
  .then(function (image) {
    currentImage = image;
    return wait(2);
  })
  .then(function () {
    console.log('Waited 2 seconds');
    currentImage.style.display = 'none';
    return createImage('../../img/img-3.jpg');
  })
  .then(function (image) {
    currentImage = image;
    return wait(2);
  })
  .then(function () {
    console.log('Waited 2 seconds');
    currentImage.style.display = 'none';
  })
  .catch(function (err) {
    console.error(err);
  });
