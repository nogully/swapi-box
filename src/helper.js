export const getPeople = async () => {
  const response = await fetch('https://swapi.co/api/people')
  const data = await response.json()
  if (data.status <= 400) {
    return data
  } else { 
    return data.status
  }
}

export const resolvePeopleEndpoints = async (array) => {
}

// export default class StarWars { //shouldn't be a class - just a collection of functions 
//   constructor(data) {
//     this.data = data
//   }

//   filmCrawl(films) {
//     const film = films.results[0];
//     return  Object.assign({}, {title: film.title},
//           {episode_id: film.episode_id},
//           {opening_crawl: film.opening_crawl}
//       )
//   }

//   getRandomInt(max) {
//     return Math.floor(Math.random() * Math.floor(max));
//   }


//   //routeButtonType() { }

//   cleanPeople(people) { //data should be resolved be
//     return people.results.reduce( async (acc, person, index ) => {
//       const homeworld = await fetch(person.homeworld);
//       const homeworldData = await homeworld.json();
//       const species = await fetch(person.species);
//       const speciesData = await species.json();
//       if (!acc[index]) { //this should check to see that person isn't in there
//         acc[index] = {
//           name: person.name, 
//           homeworld: homeworldData.name,
//           species: speciesData.name, 
//           population: homeworldData.population
//         }
//       }
//       return acc
//      }, [])
//   }

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