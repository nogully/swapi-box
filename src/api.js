/* eslint-disable */
const root = ``;

function apiGet(url) {
  return fetch(url).then( response => response.json() );
}

export default {
  getWeather(display) {
    return apiGet(`${root}/${display}.json`);
  }
};
