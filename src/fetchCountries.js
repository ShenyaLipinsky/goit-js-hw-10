import Notiflix from 'notiflix';

const fetchLink = 'https://restcountries.com/v3.1/name/';

Notiflix.Notify.init({
  width: '450px',
  position: 'top-right',
  distance: '50px',
  borderRadius: '10px',
  clickToClose: true,
  useIcon: false,
  fontSize: '23px',
});

function fetchCountries(name) {
  return fetch(`${fetchLink}${name}`)
    .then(res => {
      if (!res.ok) {
        throw new Error();
      }
      return res.json();
    })
    .catch(err => {
      // console.log(err);
      return Notiflix.Notify.failure('Oops, there is no country with that name');
    });
}
export default fetchCountries;
