export const resolveEndpoint = async (url) => {
  try {
    const response = await fetch(url);
    const parsed = await response.json();
    return parsed;
  } catch (error) { 
    throw new Error('resolveEndpoint')
  }
};

export const getFilmCrawl = async () => {
  try {
    const response = await fetch('https://swapi.co/api/films/');
    const films = await response.json();
    const { title, episode_id, opening_crawl } = films.results[getRandomInt()]
    const randomFilm = Object.assign( {}, {title}, {episode_id}, {opening_crawl} )
    return randomFilm;
  } catch (error) { 
    throw new Error('getFilmCrawl')
  }
}

const getRandomInt = () => {
  return Math.floor(Math.random() * Math.floor(6));
}

export const getPeople = async () => {
  try {
    const response = await fetch('https://swapi.co/api/people');
    const parsed = await response.json();
    return cleanPeople(parsed.results);
  } catch (error) { 
    throw new Error('getPeople')
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
  const response = await fetch('https://swapi.co/api/planets/');
  if (response.status <= 400) {
    const parsed = await response.json();
    return await cleanPlanets(parsed.results);
  } else { 
    const parsed = await response.json();
    const errorMessage = "Error " + parsed.status;
    alert(errorMessage);
    return errorMessage;
  }
}

const cleanPlanets = async (planets) => {
  const unresolvedPromises = planets.map( async (planet) => {
    const { name, terrain, population, climate, residents } = planet;
    const residentData = await cleanResidents(residents);
    const cleaned = Object.assign({}, 
                                  {name: name}, 
                                  {terrain: terrain}, 
                                  {climate: climate}, 
                                  {population: population}, 
                                  {residents: residentData.join(', ') }
    )
    return cleaned;
  })
  return Promise.all(unresolvedPromises)
}

const cleanResidents = async (residents) => {
  const unresolvedPromises = residents.map( async (resident) => {
    const person = await resolveEndpoint(resident);
    return person.name 
  })
  return Promise.all(unresolvedPromises)
}

export const getVehicles = async () => {
  const vehicles = await resolveEndpoint('https://swapi.co/api/vehicles/')
  const cleaned = await cleanVehicles(vehicles.results)
  return cleaned;
}

const cleanVehicles = async (vehicles) => {
  const unresolvedPromises = vehicles.map( async (vehicle) => {
    const { name, model, vehicle_class, passengers } = vehicle;
    return Object.assign({}, 
                          {name}, 
                          {model}, 
                          {vehicle_class},
                          {passengers})
  })
  return Promise.all(unresolvedPromises)
}
