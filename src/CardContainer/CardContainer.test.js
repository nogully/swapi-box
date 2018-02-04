 /* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import CardContainer from './CardContainer';
import Card from '../Card/Card';
import ErrorCard from '../Card/ErrorCard';
import { shallow, mount } from 'enzyme';

describe('CardContainer', () => {
  let wrapper
  let mockArray
  let mockFaves
  let favoriteCard

  beforeEach(() => {  
    mockArray = [ { "name":'Endor', 
                    "terrain": 'forest', 
                    "climate": 'temperate', 
                    "population": '30000000',
                    "residents": 'Ewoks' } ]
    mockFaves = [ { "name":'Earth', 
                    "terrain": 'forest', 
                    "climate": 'temperate', 
                    "population": '700000000',
                    "residents": 'Humans' } ]
    favoriteCard = jest.fn()
    wrapper = shallow(<CardContainer category="favorites"
                                     favoriteCard={ favoriteCard } 
                                     favorites={ mockFaves } 
                                     cardArray={ mockArray }/>);
  });

  it('exists and matches snapshot', () => {
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  it('shows favorite cards if favorites array has items', () => {
    expect(wrapper.find(Card).length).toEqual(1)  
  }) 

  it('shows an ErrorCard if category is favorites and favorites array is empty', () => {
    let emptyFaves = []
    wrapper = shallow(<CardContainer category="favorites"
                                     favoriteCard={ favoriteCard } 
                                     favorites={ emptyFaves } 
                                     cardArray={ mockArray }/>);
    expect(wrapper.find(ErrorCard).length).toEqual(1)  
  })
})