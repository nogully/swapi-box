/* eslint-disable */
export const apiGet = async (thing) => {

  const response = await fetch('url', { //RESPONSE OBJ 
    body: JSON.stringify({grocery}), 
    headers: {
      'Content-Type' : 'application/json'
    }, method: 'POST'
  })
  // const root = `../mockData.js`;

  // function apiGet(url) {
  //   return fetch(url).then( response => response.json() );
  // }

  // export default {
  //   getInfo(display) {
  //     return apiGet(`${root}/${display}.json`);
  //   }
  if (response.status <= 200)  {
    await response.json()
  } else {
    throw new Error('An error occurred while fetching')
  }
  return await response.json()
}
