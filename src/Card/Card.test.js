 /* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import { shallow, mount } from 'enzyme';

describe('Card', () => {
  let wrapper
  let mockObj 
  let favoriteCard

  beforeEach(() => {
    mockObj = { "name":'Endor', 
                "terrain": 'forest', 
                "climate": 'temperate', 
                "population": '30000000',
                "residents": 'Ewoks' }
    favoriteCard = jest.fn()
    wrapper = shallow(<Card data={ mockObj } 
                            favoriteCard={ favoriteCard } 
                            isActive='active'/>);
  });

  it('exists and matches snapshot', () => {
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  it('will give a class of active to cards in the favorites array', () => {
    expect(wrapper.find('.active').length).toEqual(1);
  })

  it('should call favoriteCard() with the button element', () => {
    wrapper.find('button').first().simulate('click');
    expect(favoriteCard).toHaveBeenCalledWith(mockObj)
  })

})