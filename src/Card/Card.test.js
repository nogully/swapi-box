 /* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import { shallow } from 'enzyme';
import mockData from '../mockData'
import StarWars from '../helper' 
import Button from '../Button/Button'

describe('Card', () => {
  let wrapper
  const starWarsData = new StarWars(mockData);

  beforeEach(() => {
    wrapper = shallow(<Card />);
    // window.fetch = jest.fn().mockImplementation(() =>Promise.resolve(json: () => Promise.resolve({ groceries: mockGroceries }) ) })
    // })
  });

  it('exists and matches snapshot', () => {
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });


})