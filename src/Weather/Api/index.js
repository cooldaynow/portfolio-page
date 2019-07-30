// @format

export const currentCity = async zipCode => {
  const URL =
    'https://api.openweathermap.org/data/2.5/weather?q=' +
    zipCode +
    '&appid=3dfdd48606f654af6715416a4bea4e5b&units=imperial';
  let data = await fetch(URL)
    .then(res => res.json())
    .then(json => json);
  return data;
};

export const currentGeo = async () => {
  var startPos;
  var geoSuccess = async position => {
    startPos = position;
    let lat = startPos.coords.latitude;
    let lon = startPos.coords.longitude;
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=3dfdd48606f654af6715416a4bea4e5b&units=imperial`;
    await fetch(URL).then(res => res.json());
  };
  navigator.geolocation.getCurrentPosition(geoSuccess);
};
