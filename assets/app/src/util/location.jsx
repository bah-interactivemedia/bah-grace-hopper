import Geocoder from './Geocoder';

export function getLocationFromLatLong(location) {
  return new Promise((resolve, reject) => {
    Geocoder.geocode(
      {
        location: new google.maps.LatLng(+location.lat, +location.long) // eslint-disable-line
      },
      (res, status) => {
        if (status === 'OK') {
          resolve(transformResult(res));
        } else {
          reject('bad geocode!');
        }
      }
    );
  });
}

function transformResult(res) {
  const address = res[0].address_components;
  const location = res[0].geometry.location;

  if (address) {
    const cityObj = address.find((division) => division.types[0] === 'locality');
    const regionObj = address.find((division) => division.types[0] === 'administrative_area_level_1');

    const city = cityObj ? cityObj.long_name : '';
    const region = regionObj ? regionObj.long_name : '';

    return {
      label: `${city}, ${region}`,
      lat: location.lat(),
      long: location.lng()
    };
  }
  return {
    label: '',
    lat: location.lat(),
    long: location.lng()
  };
}