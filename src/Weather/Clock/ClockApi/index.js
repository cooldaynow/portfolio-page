//@format
export const getTime = async coords => {
  let lon = coords.lon;
  let lat = coords.lat;

  let timestamp = Math.round(+new Date() / 60);
  let newURL = `https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${lon}&timestamp=${timestamp}&key=AIzaSyBmxnpSa_flQZsOu_AysNQL8tT06_bV-pI`;
  let geoName = await fetch(newURL).then(response => response.json());
  return geoName;
};
