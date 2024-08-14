'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const getCountryData = function (country) {
  const request = new XMLHttpRequest();

  // We opened a request that's to be sent to the specific API
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  // Then We will send the request. That request then fetches the data in the background.
  // Once that is done, It will emit the load event and by using the AddEventListner,
  // we are waiting for the event. And as soon as the data arrives the callback function will be called(Executed)
  request.send(); // This is done Asynchronously in the background
  // To register a callback on the request object for the load event
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    const html = `<article class="country">
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
  });
};

getCountryData('Portugal');
getCountryData('cape verde');
getCountryData('usa');
