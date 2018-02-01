export default class StarWars {
  constructor(data) {
    this.data = data
  }

  filmCrawl(films) {
    const film = films.results[0];
    return  Object.assign({}, {title: film.title},
          {episode_id: film.episode_id},
          {opening_crawl: film.opening_crawl}
      )
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  cleanPeople(people) {
    return people.results.reduce( async (acc, person, index ) => {
      const homeworld = await fetch(person.homeworld);
      const homeworldData = await homeworld.json();
      const species = await fetch(person.species);
      const speciesData = await species.json();
      if (!acc[index]) {
        acc[index] = {
          name: person.name, 
          homeworld: homeworldData.name,
          species: speciesData.name, 
          population: homeworldData.population
        }
      }
      return acc
     }, [])
  }

  cleanPlanets(planets) {
    return planets.results.reduce((acc, planet) => {
      if (!acc[planet.name]) {
        acc[planet.name] = {
          name: planet.name
        }
      }
      return acc
     }, [])
  }

  cleanVehicles(vehicles) {
    return vehicles.results.reduce((acc, vehicle) => {
      if (!acc[vehicle.name]) {}
      return acc
    }, [])
  }
}