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
  let mockCard
  let randomFilm = {  "title": "A New Hope", 
                      "episode_id": 4,
                      "opening_crawl": "It is a period of civil war." }

  beforeEach(() => {
    wrapper = shallow(<App />, {disableLifecycleMethods: true});
    getFilmCrawl = jest.fn().mockImplementation(() => Promise.resolve(randomFilm))
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

  it.skip('fetches randomFilm upon componentDidMount', async () => {
    expect(wrapper.state('randomFilm')).toEqual({});
    await wrapper.instance().componentDidMount()
    expect(getFilmCrawl).toHaveBeenCalled();
    expect(wrapper.state('randomFilm')).toEqual(randomFilm)
  })

  it.skip('calls fetch with the correct params', async () => {
    expectedParam = 'https://swapi.co/api/people'
    mockEvent = { event: {target: {textContent: 'people'} } } 
    await wrapper.instance().fetchData(mockEvent)
    wrapper.update();
    expect(window.fetch).toHaveBeenCalledWith(expectedParam)
  })

  it.skip('on button click (people, planets, vehicles), resets the state with the corresponding array after adding a category', async () => {
    expect(wrapper.state().category).toEqual(undefined)
    mockEvent = { event: {target: {textContent: 'people'} } }
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
          status: 200,
          json: () => Promise.resolve({  })
        })
      )
    await wrapper.instance().fetchData(mockEvent)
    wrapper.update();
    expect(wrapper.state('people').length).toEqual(1)
  })

  it('on click of Favorite button, adds Favorited cards to the state.favorites array', () => {
    wrapper.setState({ favorites: [] })
    mockCard = { name:'Leia Organa',
                 homeworld: 'Alderaan', 
                 species: 'Human', 
                 population: '4000000' }
    wrapper.instance().favoriteCard(mockCard)
    expect(wrapper.state('favorites').length).toEqual(1)
  })

  it('on 2nd click of Favorite button, removes un-Favorited cards from the state.favorites array', () => {
    mockCard = { name:'Leia Organa',
                 homeworld: 'Alderaan', 
                 species: 'Human', 
                 population: '4000000' }
    wrapper.setState({ favorites: [ mockCard ] })
    wrapper.instance().favoriteCard(mockCard)
    expect(wrapper.state('favorites').length).toEqual(0)
  })

  it('changes the displayed category to favorites when the favorites button is clicked', () => {
    mockEvent = { event: {target: {textContent: 'favorites'} } } 
    wrapper.setState({ category: 'people' })
    wrapper.instance().displayFavorites(mockEvent);
    expect(wrapper.state('category')).toEqual('favorites')
  })
})