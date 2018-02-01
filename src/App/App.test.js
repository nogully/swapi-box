/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import mockData from '../mockData'
import StarWars from '../helper' 


describe('App', () => {
  let wrapper
  let starWarsData = new StarWars(mockData);
  let mockPerson = starWarsData.cleanPeople(mockData.people)[0]
console.log(mockPerson)

  beforeEach(() => {
    wrapper = shallow(<App />);
    const expectedParams = 'https://swapi.co/api/people'

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve({
          people: mockData.people
        })
      })
    })

    expect(window.fetch).toHaveBeenCalledWith(expectedParams)
  });

  it('exists and matches snapshot', () => {
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  it('should start with an empty favorites state', () => {
    expect(wrapper.state('favorites')).toEqual([])
  })

 it('should start with a randomFilm state object from which to draw the crawl', () => {
    expect(wrapper.state('randomFilm').title).toEqual('A New Hope')
  })

  it('has a helper function which returns an object with clean people data', () => {
    expect(typeof starWarsData.cleanPeople(mockData.people)).toBe('array')
    expect(starWarsData.cleanPeople(mockData.people)['Luke Skywalker'].name).toEqual('Luke Skywalker')
  })

  it('has a helper function which returns an object with clean planet data', () => {
    expect()
  })

  it('has a helper function which returns an object with clean planet data', () => {

  })


  it('calls fetch with the correct params', () => {
   
  })

  it('resets the state after adding people', async () => {
   
  })

  it('calls the updateGroceryList callback after adding a new grocery', async () => {
 
  })
})