export const getPeople = async () => {
  const response = await fetch('https://swapi.co/api/people');
  if (response.status <= 400) {
    const parsed = await response.json();
    console.log(parsed.results);
    return cleanPeople(parsed.results);
  } else { 
    const parsed = await response.json();
    const errorMessage = "Error " + parsed.status;
    alert(errorMessage);
    return errorMessage;
  }
};

export const resolveEndpoint = async (url) => {
  const response = await fetch(url);
  if (response.status <= 400) {
    const parsed = await response.json();
    return parsed;
  } else { 
    const parsed = await response.json();
    const errorMessage = "Error " + parsed.status;
    alert(errorMessage);
    return errorMessage;
  }
};

export const getFilmCrawl = async () => {
  const response = await fetch('https://swapi.co/api/films/');
  const films = await response.json();
  const { title, episode_id, opening_crawl } = films.results[getRandomInt()]
  const randomFilm = Object.assign( {}, {title}, {episode_id}, {opening_crawl} )
  return randomFilm;
}

const getRandomInt = () => {
  return Math.floor(Math.random() * Math.floor(6));
}

const cleanPeople = (people) => {
  const unresolvedPromises = people.map( async (person) => {
    const { name, homeworld, species } = person;
    const homeworldData = await resolveEndpoint(homeworld);
    const speciesData = await resolveEndpoint(species)
    const cleaned = Object.assign({}, 
      {name: name}, 
      {homeworld: homeworldData.name}, 
      {species: speciesData.name}, 
      {population: homeworldData.population}
    )
    return cleaned;
  })
  return Promise.all(unresolvedPromises)
}

export const getPlanets = async () => {
  console.log('get planets!!')
}

export const getVehicles = async () => {
  console.log('get vehicles!!')
}

//   cleanPlanets(planets) {
//     return planets.results.reduce((acc, planet) => {
//       if (!acc[planet.name]) {
//         acc[planet.name] = {
//           name: planet.name
//         }
//       }
//       return acc
//      }, [])
//   }

//   // cleanResident(){
//   //   const unresolvedPromises = arrayOfResidents
//   //   return Promise.all(unresolvedPromises)
//   // }

//   fetchBios(arrayOfBios) {
//     const unresolvedPromises = arrayOfBios.map(staffMember => {
//       return fetch(staffMember.info)
//               .then(data => data.json())
//               .then(bio => ({ ...staffMember, ...bio }))
//     })
//     return Promise.all(unresolvedPromises)
//   }

//   cleanVehicles(vehicles) {
//     return vehicles.results.reduce((acc, vehicle) => {
//       if (!acc[vehicle.name]) {}
//       return acc
//     }, [])
//   }
// }