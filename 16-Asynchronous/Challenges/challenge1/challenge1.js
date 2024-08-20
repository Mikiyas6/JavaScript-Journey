'use strict';

const containerCountries = document.querySelector('.countries');
const btn = document.querySelector('.btn-country');

const renderError = function (msg) {
  containerCountries.style.opacity = 1;
  containerCountries.insertAdjacentText('beforeend', msg);
};

const renderCountry = function (data) {
  const html = ` <article class="country">
          <img class="country__img" src=${data.flags.png} />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${+(
              data.population / 1000000
            ).toFixed(1)} million people</p>
            <p class="country__row"><span>🗣️</span>${
              Object.values(data.languages)[0]
            }</p>
            <p class="country__row"><span>💰</span>${
              Object.values(data.currencies)[0].name
            }</p>
          </div>
        </article>`;
  containerCountries.style.opacity = 1;
  containerCountries.insertAdjacentHTML('beforeend', html);
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(function (response) {
    console.log(response);
    if (!response.ok) {
      throw new Error(`${errorMsg}. (${response.status})`);
    }
    if (response.status === 304) {
      throw new Error(`${'Reloaded Too Fast'}. (${response.status})`);
    }
    return response.json();
  });
};

const whereAmI = function (lat, lng) {
  const url = `https://geocode.xyz/${lat},${lng}?geoit=json&auth=586913169245525817172x39607`;
  getJSON(url, 'Country not found')
    .then(function (data) {
      console.log(`You are in ${data.city}, ${data.country}`);
      const anotherUrl = `https://restcountries.com/v3.1/name/${data.country}`;
      getJSON(anotherUrl, 'Country Not found')
        .then(function ([data]) {
          renderCountry(data);
        })
        .catch(function (err) {
          console.log('Here');
          renderError(`💥💥💥 Something went wrong. ${err.message}`);
        });
    })
    .catch(function (err) {
      console.log('Here');
      renderError(`💥💥💥 Something went wrong. ${err.message}`);
    });
};

btn.addEventListener('click', function () {
  whereAmI(52.508, 13.381);
  whereAmI(19.037, 72.873);
  whereAmI(-33.933, 18.474);
  whereAmI(-33.933, 18.474);
  whereAmI(-33.933, 18.474);
  whereAmI(-33.933, 18.474);
  whereAmI(-33.933, 18.474);
  whereAmI(-33.933, 18.474);
  whereAmI(-33.933, 18.474);
  whereAmI(-33.933, 18.474);
  whereAmI(-33.933, 18.474);
  whereAmI(-33.933, 18.474);
  whereAmI(-33.933, 18.474);
  whereAmI(-33.933, 18.474);
  whereAmI(-33.933, 18.474);
  whereAmI(-33.933, 18.474);
  whereAmI(-33.933, 18.474);
});
