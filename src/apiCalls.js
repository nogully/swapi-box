export const getPeople = async () => {
  const response = await fetch('https://swapi.co/api/people');
  const parsed = await response.json();
  if (parsed.status <= 400) {
    console.log(cleanPeople(parsed))
    return cleanPeople(parsed);
  } else { 
    const errorMessage = "Error " + parsed.status;
    alert(errorMessage);
    return errorMessage;
  }
};

export const resolveEndpoint = async (url) => {
  const response = await fetch(url);
  const parsed = await response.json();
  return parsed;
};

export const getFilmCrawl = async () => {
  const response = await fetch('https://swapi.co/api/films/');
  const films = await response.json();
  const { title, episode_id, opening_crawl } = films.results[getRandomInt(6)]
  const randomFilm = Object.assign({}, {title}, {episode_id}, {opening_crawl} )
  return randomFilm
}

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

const cleanPeople = (people) => {
  return people.results.reduce( async (acc, person, index ) => {
    const homeworld = await fetch(person.homeworld);
    const homeworldData = await homeworld.json();
    const species = await fetch(person.species);
    const speciesData = await species.json();
    if (!acc[index]) { //this should check to see that person isn't in there
      acc[index] = {
        name: person.name, 
        homeworld: homeworldData.name,
        species: speciesData.name, 
        population: homeworldData.population
      }
    }
    return acc;
   }, [])
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