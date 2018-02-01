/* eslint-disable */
import { getPeople } from './helper' 

describe('helper', () => {
  it.skip('should have a function which routes each kind of button (people, planets, vehicles) to fetch that particular data', () => {

  })

  it.skip('has a helper function which returns an array with clean people data', () => {
  //   expect(typeof starWarsData.cleanPeople(mockData.people)).toBe('array')
  //   expect(starWarsData.cleanPeople(mockData.people)['Luke Skywalker'].name).toEqual('Luke Skywalker')
  })

  it.skip('has a helper function which returns an array with clean planet data', () => {
    
  })

  it.skip('has a helper function which returns an array with clean vehicle data', () => {

  })

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

    it('returns an array of people if the status code is okay', async () => {
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

})