/* eslint-disable */
const root = `../mockData.js`;

function apiGet(url) {
  return fetch(url).then( response => response.json() );
}

export default {
  getInfo(display) {
    return apiGet(`${root}/${display}.json`);
  }
};
