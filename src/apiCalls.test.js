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
      window.fetch = jest.fn().mockImplementation( () => {
        return Promise.resolve({
          status: 200,
          json: () => Promise.resolve( {
            status: 200,
            value: ''
          }) 
        })
      })

    it('should call fetch with the expected param', () => {
      const expectedParam = 'https://swapi.co/api/films/'
      getFilmCrawl()
      expect(window.fetch).toHaveBeenCalledWith(expectedParam)
    })

    it.skip('should return a clean film object', async () => {
      window.fetch = jest.fn().mockImplementation( () => {
        return Promise.resolve({
          status: 200,
          json: () => Promise.resolve( {
            status: 200,
            value: { "films": {
                          "results": [
                            {
                              "title": "A New Hope", 
                              "episode_id": 4, 
                              "opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....", 
                              "director": "George Lucas", 
                              "producer": "Gary Kurtz, Rick McCallum", 
                              "release_date": "1977-05-25" } ] }}
          }) 
        })
      })
      const expectedResult = {"title": "A New Hope", 
                              "episode_id": 4,
                              "opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....", 
      }
      const filmData = getFilmCrawl(0)
      expect(filmData).resolves.toEqual(expectedResult)
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

  describe('getVehicles', async () => {
    beforeAll( () => { 
      window.fetch = jest.fn().mockImplementation( () => {
        return Promise.resolve({
          status: 200,
          json: () => Promise.resolve( {
            status: 200,
            value: {vehicles: { results:
                        [{ "name": "Sand Crawler" }] }}
          }) 
        })
      })
    })

    it('should call fetch with the expected param', () => {
      const expectedParam = 'https://swapi.co/api/vehicles/1/'
      getVehicles(expectedParam)
      expect(window.fetch).toHaveBeenCalledWith(expectedParam)
    })

    it('should return a data object for a given URL', async () => {
      const expectedResult = { "name": "Sand Crawler" }
      const vehicles = await getVehicles('https://swapi.co/api/planets/1/')
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
      const error = await getVehicles('https://swapi.co/api/planets/1/')
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

})