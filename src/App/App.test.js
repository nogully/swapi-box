/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import mockData from '../mockData'
import StarWars from '../helper' 


describe('App', () => {
  let wrapper
  // let starWarsData = new StarWars(mockData);
  let mockPerson = {
          name: "Leia Organa",
          homeworld: "https://swapi.co/api/planets/1/",
          species: "Human",
          population: "https://swapi.co/api/planets/1/"
        }

  beforeEach(() => {
    wrapper = shallow(<App />);
    const expectedParams = 'https://swapi.co/api/people'

    // window.fetch = jest.fn().mockImplementation(() => {
    //   return Promise.resolve({
    //     ok: true,
    //     status: 200,
    //     json: () => Promise.resolve({
    //       people: mockData.people
    //     })
    //   })
    // })

  //   expect(window.fetch).toHaveBeenCalledWith(expectedParams)
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

  it.skip('on button click (people, planets, vehicles), resets the state with the corresponding array after adding a category', async () => {
   
  })

  it.skip('calls fetch with the correct params', () => {
   
  })
  
  it.skip('populates the CardContainer with the correct kind of cards', async () => {
 
  })

  it.skip('on click of Favorite button, adds Favorited cards to the state.favorites array', async () => {
 
  })

  it.skip('on 2nd click of Favorite button, removes un-Favorited cards from the state.favorites array', async () => {

  })
})