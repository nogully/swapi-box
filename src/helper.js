export default class StarWars {
  constructor(data) {
    this.data = data;
    this.films = populateFilms(films);
  }

  populateFilms(films) {

  }

  filmCrawl(number) {
    return this.films.results[number];
  }

  cleanPeople(people) {
    return this.data.results.reduce((acc, person ) => {
      if (!acc[name]) {
        acc[name] = {
          name: data.results[person].name, 
          homeworld: data.results[person].homeworld,
          species: data.results[person].species, 
          population: ''
        }
      }
      return acc
   }, {})
  }

  cleanPlanets(planets) {

  }

  cleanVehicles(vehicles) {

  }
}