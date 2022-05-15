import './css/styles.css';
const debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;
import fetchCountries from './fetchCountries';
import renderFetchedData from './renderFetchData';

const inputArea = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');

let inputText = '';

inputArea.addEventListener('input', debounce(fetchURI, DEBOUNCE_DELAY));

function fetchURI(evt) {
  inputText = evt.target.value;
  inputText.trim();
  countryList.innerHTML = '';
  if (inputText === '') {
    return;
  }
  fetchCountries(inputText)
    .then(query => {
      renderFetchedData(query);
    })
    .catch(err => {
      // console.log(err);
      err;
    });
}
