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
  console.log('getplanets')
  const response = await fetch('https://swapi.co/api/planets/');
  if (response.status <= 400) {
    const parsed = await response.json();
    console.log(parsed.results);
    return await cleanPlanets(parsed.results);
  } else { 
    const parsed = await response.json();
    const errorMessage = "Error " + parsed.status;
    alert(errorMessage);
    return errorMessage;
  }
}

const cleanPlanets = async (planets) => {
  console.log('cleanplanets!')
  const unresolvedPromises = planets.map( async (planet) => {
    const { name, terrain, population, climate, residents } = planet;
    // const residentData = await cleanResidents(residents);
    const cleaned = Object.assign({}, 
      {name: name}, 
      {terrain: terrain}, 
      {climate: climate}, 
      {population: population}, 
      {residents: residents }
    )
    return cleaned;
  })
  return Promise.all(unresolvedPromises)
}

export const getVehicles = async () => {
  console.log('get vehicles!!')
}



const cleanResidents = async (residents) => {
  const unresolvedPromises = residents.reduce( async (acc, url) => {
    const person = await resolveEndpoint(url);
    acc.concat(', ', person.name);
    return acc;
  }, '')
  return Promise.all(unresolvedPromises)
}

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