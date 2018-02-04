/* eslint-disable */
import { getPeople,
         resolveEndpoint,
         getPlanets, 
         getVehicles, 
         getFilmCrawl, 
         cleanVehicles
       } from './apiCalls' 

describe('apiCalls', () => {

  describe('resolveEndpoint', async () => {
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

    it('should call fetch with the expected param', () => {
      const expectedParam = 'https://swapi.co/api/planets/1/'
      resolveEndpoint(expectedParam)
      expect(window.fetch).toHaveBeenCalledWith(expectedParam)
    })

    it('should return a data object for a given URL', async () => {
      const expectedResult = { name: "Tatooine" }
      const planet = await resolveEndpoint('https://swapi.co/api/planets/1/')
      expect(planet.value).toEqual(expectedResult)
    })

    it('should return an error if request is rejected', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject({
          status: 500,
          json: () => Promise.reject("Error") 
        })
      })
      const expectedResult = "Error"
      const error = await resolveEndpoint('https://swapi.co/api/planets/1/')
      expect(error).toEqual(expectedResult)
    })
  })

  describe('getFilmCrawl', async () => {
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

    it('should call fetch with the expected param', () => {
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

    it('should return an error if request is rejected', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject({
          status: 500,
          json: () => Promise.reject("Error") 
        })
      })
      const expectedResult = "Error"
      const error = await resolveEndpoint('https://swapi.co/api/films/1/')
      expect(error).toEqual(expectedResult)
    })
  })

  describe('getVehicles', async () => {
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

    it('should call fetch with the expected param', () => {
      const expectedParam = 'https://swapi.co/api/vehicles/'
      getVehicles(expectedParam)
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

    it('should return an error if the request is rejected', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject({
          status: 500,
          json: () => Promise.reject(["Error"]) 
        })
      })
      const expectedResult = "Error"
      const error = await getVehicles()
      expect(error).toEqual(expectedResult)
    })
  })

  describe('cleanVehicles', () => {
      let mockVehicles = [
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


 // describe('getPeople', () => {
  //   window.fetch = jest.fn().mockImplementation( () => {
  //     return Promise.resolve({
  //       status: 200, 
  //       json: () => Promise.resolve( {
  //         status: 200,
  //         value:  [ {name:'Leia Organa'}, {name:'Luke Skywalker'} ]
  //       })
  //     })
  //   })

  //   it('calls fetch with the correct params', () => {
  //     const expectedParam = 'https://swapi.co/api/people'
  //     getPeople()
  //     expect(window.fetch).toHaveBeenCalledWith(expectedParam)
  //   })

  //   it('returns an array of people if the status code is okay', async () => {
  //     const expectedResponse = { results: [ {name:'Leia Organa'}, {name:'Luke Skywalker'} ] }
  //     const people = await getPeople()
  //     expect(people).toEqual(expectedResponse)
  //   })

  //   it('returns an error status code if the status code is over 400', async () => {
  //     window.fetch = jest.fn().mockImplementation(() => {
  //       return Promise.reject({
  //         status: 500,
  //         json: () => Promise.reject("Error") 
  //       })
  //     })
  //     const expectedError = 'Error 500'
  //     const error = await getPeople()
  //     expect(error).toEqual(expectedError)
  //   })
  // })

})