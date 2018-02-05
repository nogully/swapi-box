/* eslint-disable */
import { resolveEndpoint,
         getFilmCrawl,
         getPeople,
         cleanPeople,
         getPlanets, 
         cleanPlanets,
         cleanResidents,
         getVehicles, 
         cleanVehicles
       } from './apiCalls' 

describe('apiCalls', () => {

  describe('1 - resolveEndpoint', async () => {
    beforeAll( () => { 
      window.fetch = jest.fn().mockImplementation( () => {
        return Promise.resolve({
          status: 200,
          json: () => Promise.resolve( {
            status: 200,
            value: { name: "Tatooine" }
          }) 
        })
      })
    })

    it('should call fetch with the expected parameter', () => {
      const expectedParam = 'https://swapi.co/api/planets/1/'
      resolveEndpoint(expectedParam)
      expect(window.fetch).toHaveBeenCalledWith(expectedParam)
    })

    it('should return a data object for a given URL', async () => {
      const expectedResult = { name: "Tatooine" }
      const planet = await resolveEndpoint('https://swapi.co/api/planets/1/')
      expect(planet.value).toEqual(expectedResult)
    })

    it('should return an error if request is rejected',  () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({ status: 500 }) }
      )
      const expectedResult = Error("Error in resolveEndpoint")
      const error = resolveEndpoint('url')
      expect(error).rejects.toEqual(expectedResult)
    })
  })

  describe('2 - getFilmCrawl', async () => {
    beforeAll(() => {
      window.fetch = jest.fn().mockImplementation( () => {
        return Promise.resolve({
          status: 200,
          json: () => Promise.resolve( { "results": [
                      {
                        "title": "A New Hope", 
                        "episode_id": 4, 
                        "opening_crawl": "It is a period of civil war.", 
                        "director": "George Lucas", 
                        "producer": "Gary Kurtz, Rick McCallum", 
                        "release_date": "1977-05-25" } ] }
          )
        })
      })
    })

    it('should call fetch with the expected parameter', () => {
      const expectedParam = 'https://swapi.co/api/films/'
      getFilmCrawl(0)
      expect(window.fetch).toHaveBeenCalledWith(expectedParam)
    })

    it('should return a clean film object', async () => {
      const expectedResult = {  "title": "A New Hope", 
                                "episode_id": 4,
                                "opening_crawl": "It is a period of civil war." }
      const filmData = await getFilmCrawl(0)
      expect(filmData).toEqual(expectedResult)
    })

    it('should return an error if request is rejected', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({ status: 500 }) 
      })
      const expectedResult = Error("Error in getFilmCrawl")
      const error = getFilmCrawl(0)
      expect(error).rejects.toEqual(expectedResult)
    })
  })

  describe('3 - getPeople', () => {
    beforeAll( () => {
      window.fetch = jest.fn().mockImplementation( () => {
        return Promise.resolve({
            status: 200,
            json: () => Promise.resolve({ results: [ 
                           {name:'Leia Organa',
                            homeworld: undefined, 
                            species: undefined, 
                            population: undefined } ] })
        })
      })
    })

    it('calls fetch with the correct parameter', () => {
      const expectedParam = 'https://swapi.co/api/people'
      getPeople()
      expect(window.fetch).toHaveBeenCalledWith(expectedParam)
    })

    it('returns a clean array of people if the status code is okay', async () => {
      const expectedResponse = [{"homeworld": undefined, 
                                  "name": "Leia Organa", 
                                  "population": undefined, 
                                  "species": undefined}]
      const people = await getPeople()
      expect(people).toEqual(expectedResponse)
    })

    it('returns an error if the status code is bad', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({ status: 500 }) 
      })
      const expectedError = Error('Error in getPeople')
      const error = getPeople()
      expect(error).rejects.toEqual(expectedError)
    })
  })

  describe('4 - getPlanets', () => {
    beforeAll( () => {
      window.fetch = jest.fn().mockImplementation( () => {
        return Promise.resolve({
            status: 200,
            json: () => Promise.resolve({ results: [ 
                           {"name":'Endor',
                           "rotation_period": "18", 
                            "orbital_period": "402", 
                            "diameter": "4900", 
                            "terrain": 'forest', 
                            "climate": 'temperate', 
                            "population": '30000000',
                            "residents": [] } ] })
        })
      })
    })

    it('calls fetch with the correct parameter', () => {
      const expectedParam = 'https://swapi.co/api/planets/'
      getPlanets()
      expect(window.fetch).toHaveBeenCalledWith(expectedParam)
    })

    it('returns a clean array of planets if the status code is okay', async () => {
      const expectedResponse = [ 
                               {"name":'Endor', 
                                "terrain": 'forest', 
                                "climate": 'temperate', 
                                "population": '30000000',
                                "residents": '' } ]
      const planets = await getPlanets()
      expect(planets).toEqual(expectedResponse)
    })

    it('returns an error if the status code is bad', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({ status: 500 }) 
      })
      const expectedError = Error('Error in getPlanets')
      const error = getPlanets()
      expect(error).rejects.toEqual(expectedError)
    })
  })


  describe('5a - getVehicles', async () => {
    beforeAll( () => { 
      window.fetch = jest.fn().mockImplementation( () => {
        return Promise.resolve({
          status: 200,
          json: () => Promise.resolve( { 
                                results: [ 
                                  { "name": "Sand Crawler" , 
                                  "model": "Digger Crawler", 
                                  "passengers": "30", 
                                  "cargo_capacity": "50000", 
                                  "consumables": "2 months", 
                                  "vehicle_class": "wheeled" }
                                ] } ) 
        })
      })
    })

    it('should call fetch with the expected parameter', () => {
      const expectedParam = 'https://swapi.co/api/vehicles/'
      getVehicles()
      expect(window.fetch).toHaveBeenCalledWith(expectedParam)
    })

    it('should return a data object for a given URL', async () => {
      const expectedResult = [
                          {"name": "Sand Crawler", 
                          "model": "Digger Crawler", 
                          "vehicle_class": "wheeled", 
                          "passengers": "30" }   ] 
      const vehicles = await getVehicles()
      expect(vehicles).toEqual(expectedResult)
    })

  })

  describe('5b - cleanVehicles', () => {
    const mockVehicles = [
      {
        "name": "Sand Crawler", 
        "model": "Digger Crawler", 
        "passengers": "30", 
        "cargo_capacity": "50000", 
        "consumables": "2 months", 
        "vehicle_class": "wheeled", 
        "pilots": [], 
      }
    ]

    it('should clean the vehicles data object and return an array of objects', async () => {
      const expectedResult = [
                        {"name": "Sand Crawler", 
                        "model": "Digger Crawler", 
                        "vehicle_class": "wheeled", 
                        "passengers": "30" }   ] 
      const cleaned = await cleanVehicles(mockVehicles);
      expect(cleaned).toEqual(expectedResult)

    })
  })

  
 

})