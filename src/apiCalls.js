export const resolveEndpoint = async (url) => {
  try {
    const response = await fetch(url);
    const parsed = await response.json();
    if (response.status <= 200) {
      return parsed;
    } else {
      throw new Error("Error in resolveEndpoint")
    }
  } catch (error) { 
    throw new Error("Error in resolveEndpoint")
  }
};

export const getFilmCrawl = async (randomNumber) => {
  try {
    const response = await fetch('https://swapi.co/api/films/');
    const films = await response.json();
    if (response.status <= 200) {
      const { title, episode_id, opening_crawl } = films.results[ randomNumber ]
      const randomFilm = Object.assign( {}, 
                                        {title}, 
                                        {episode_id}, 
                                        {opening_crawl} )
      return randomFilm;
    } else {
      throw new Error("Error in getFilmCrawl")
    }
  } catch (error) { 
    throw new Error("Error in getFilmCrawl")
  }
}

export const getRandomInt = () => {
  return Math.floor(Math.random() * Math.floor(6));
}

export const getPeople = async () => {
  try {
    const response = await fetch('https://swapi.co/api/people');
    const parsed = await response.json();
    return cleanPeople(parsed.results);
  } catch (error) { 
    throw new Error("Error in getPeople")
  }
};

const cleanPeople = (people) => {
  const unresolvedPromises = people.map( async (person) => {
    const { name, homeworld, species } = person;
    const homeworldData = await resolveEndpoint(homeworld);
    const speciesData = await resolveEndpoint(species)
    const cleaned = Object.assign({}, 
                                  {name}, 
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
                                  {name}, 
                                  {terrain}, 
                                  {climate}, 
                                  {population}, 
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
  try { 
    const vehicles = await resolveEndpoint('https://swapi.co/api/vehicles/')
    const cleaned = await cleanVehicles(vehicles.results)
    return cleaned
  } catch (error) { 
    console.log('getVehicles')
    return "Error"
  }
}

export const cleanVehicles = async (vehicles) => {
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
