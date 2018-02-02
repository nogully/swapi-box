/* eslint-disable */
import { getPeople,
         resolveEndpoint,
       } from './apiCalls' 

describe('apiCalls', () => {

  describe('getPeople', () => {
    window.fetch = jest.fn().mockImplementation( () => {
      return Promise.resolve({
        status: 200, 
        json: () => Promise.resolve( {
          status: 200,
          value:  [ {name:'Leia Organa'}, {name:'Luke Skywalker'} ]
        })
      })
    })

    it('calls fetch with the correct params', () => {
      const expectedParam = 'https://swapi.co/api/people'
      getPeople()
      expect(window.fetch).toHaveBeenCalledWith(expectedParam)
    })

    it('returns an array of people if the status code is 200', async () => {
      const expectedResponse = [ {name:'Leia Organa'}, {name:'Luke Skywalker'} ]
      const people = await getPeople()
      expect(people).toEqual(expectedResponse)
    })

    it('returns an error status code if the status code is over 400', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          status: 500,
          json: () => Promise.resolve( {
            status: 500
          }) 
        })
      })
      const expectedError = 'Error 500'
      const error = await getPeople()
      expect(error).toEqual(expectedError)
    })
  })
    
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
  })

  describe('cleanPeople', () => {
      it('should clean the people data object and return an array of objects', () => {

      })
  })

})