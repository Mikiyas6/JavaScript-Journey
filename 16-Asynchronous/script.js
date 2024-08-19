'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = function (data) {
  console.log(data);
  let html = `<article class="country">
        <img class="country__img" src="${data.flags.png}" />
        <div class="country__data">
          <h3 class="country__name">${data.name.common}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(0)} million People</p>
          <p class="country__row"><span>🗣️</span>${Object.values(
            data.languages
          )}</p>
          <p class="country__row"><span>💰</span>${
            Object.values(data.currencies)[0].name
          }</p>
            </div>
            </article> `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

// const getCountryData = function (country) {
//   // Ajax Call Country 1
//   const request = new XMLHttpRequest();

//   // We opened a request that's to be sent to the specific API
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   // Then We will send the request. That request then fetches the data in the background.
//   // Once that is done, It will emit the load event and by using the AddEventListner,
//   // we are waiting for the event. And as soon as the data arrives the callback function will be called(Executed)
//   request.send(); // This is done Asynchronously in the background
//   // To register a callback on the request object for the load event
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     // Render Country 1
//     renderCountry(data);
//     // Get Neighbor Country (2)
//     const neighbors = data.borders;
//     if (!neighbors) return;
//     neighbors.forEach(function (neighbor) {
//       // AJAX call country 2
//       const newRequest = new XMLHttpRequest();
//       newRequest.open(
//         'Get',
//         `https://restcountries.com/v3.1/alpha/${neighbor}`
//       );
//       newRequest.send();
//       newRequest.addEventListener('load', function () {
//         const [newData] = JSON.parse(this.responseText);
//         renderCountry(newData);
//       });
//     });
//   });
// };

// getCountryData('usa');

// FETCH

// const request = fetch(`https://restcountries.com/v3.1/name/Ethiopia`);
// console.log(request);

const getCountryData = function (country) {
  // fetch will return a promise and we can call the then method.
  // In the then method, we need to pass a callback function that will be executed when the promise is fullfilled
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      renderCountry(data[0]);
    });
};
getCountryData('Ethiopia');
getCountryData('Morocco ');
