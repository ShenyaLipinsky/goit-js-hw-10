import Notiflix from 'notiflix';

const countryList = document.querySelector('.country-list');

Notiflix.Notify.init({
  width: '400px',
  position: 'top-right',
  distance: '50px',
  borderRadius: '10px',
  clickToClose: true,
  useIcon: false,
  fontSize: '23px',
});

function renderFetchedData(data) {
  // console.log(data.length);
  if (data.length > 10) {
    // console.log(data.length);
    return Notiflix.Notify.success('Too many matches found. Please enter a more specific name."');
  }
  if (data.length < 10 && data.length !== 1) {
    // console.log(data.length);
    const markup = data
      .map(data => {
        // console.log(data);
        return `<li class="country-item"><img src = "${data.flags.svg}" class="country-item__image" > <p class="country-item__name">${data.name.official}</p></li>`;
      })
      .join('');
    // console.log(countryList);
    return countryList.insertAdjacentHTML('beforeend', markup);
  }
  if (data.length === 1) {
    // console.log(data[0]);

    const markup = `<li>
    <div class="country-item">
        <img src="${data[0].flags.svg}" class="country-item__image">
    <h1 class="country-item__name">${data[0].name.official}</h1>
    </div>
    <div class="country-item__full">
    <p class="country-item__title">Capital: <span class="country-item__text">${
      data[0].capital
    }</span></p>
    <p class="country-item__title">Population: <span class="country-item__text">${
      data[0].population
    }</span></p>
    <p class="country-item__title">Language: <span class="country-item__text">${
      Object.values(data[0].languages)[0]
    }</span></p>
    </div>
    </li>`;

    // console.log(countryList);
    return countryList.insertAdjacentHTML('beforeend', markup);
  }
}
export default renderFetchedData;
