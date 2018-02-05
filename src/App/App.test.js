/* eslint-disable */
import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import Header from '../Header/Header'
import CardContainer from '../CardContainer/CardContainer'
import Welcome from '../Welcome/Welcome'

window.fetch = jest.fn() 

describe('App', () => {
  let wrapper
  let getFilmCrawl
  let expectedParam 
  let mockEvent
  let randomFilm = {  "title": "A New Hope", 
                      "episode_id": 4,
                      "opening_crawl": "It is a period of civil war." }

  beforeEach(() => {
    wrapper = shallow(<App />, {disableLifecycleMethods: true});
    getFilmCrawl = jest.fn().mockImplementation(() => Promise.resolve(randomFilm
  
        )
    )
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
          status: 200,
          json: () => Promise.resolve({  })
        })
      )
  })

  it('should exist and match snapshot', () => {
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a default state of empty film and faves', () => {
    const defaultState = { 
      randomFilm: {},
      favorites: [] };
    expect(wrapper.state()).toEqual(defaultState);
  });

  it('fetches randomFilm upon componentDidMount', async () => {
    expect(wrapper.state('randomFilm')).toEqual({});
    await wrapper.instance().componentDidMount()
    expect(getFilmCrawl).toHaveBeenCalled();
    expect(wrapper.state('randomFilm')).toEqual(randomFilm)
  })

  it('on button click (people, planets, vehicles), resets the state with the corresponding array after adding a category', async () => {
    expect(wrapper.state().category).toEqual(undefined)
    mockEvent = {target: {textContent: 'people'} } 
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
          status: 200,
          json: () => Promise.resolve({  })
        })
      )
    await wrapper.instance().fetchData(mockEvent)
    wrapper.update();
    expect(wrapper.state('people').length).toEqual(1)
  })

  it.skip('calls fetch with the correct params', () => {
    expectedParam = 'https://swapi.co/api/people'
  })
  
  it.skip('populates the CardContainer with the correct kind of cards', async () => {
 
  })

  it.skip('on click of Favorite button, adds Favorited cards to the state.favorites array', async () => {
 
  })

  it.skip('on 2nd click of Favorite button, removes un-Favorited cards from the state.favorites array', async () => {

  })
})