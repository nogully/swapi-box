/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import mockData from '../mockData'
import StarWars from '../helper' 


describe('App', () => {
  let wrapper
  const starWarsData = new StarWars(mockData);

  beforeEach(() => {
    wrapper = shallow(<App />);
    // window.fetch = jest.fn().mockImplementation(() =>Promise.resolve(json: () => Promise.resolve({ groceries: mockGroceries }) ) })
    // })
  });

  it('exists and matches snapshot', () => {
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  it('has a helper function which returns an object with clean people data', () => {
    expect(typeof starWarsData.people).toBe('object')
  })

  it('calls fetch with the correct params', () => {
   
  })

  it('resets the state after adding people', async () => {
   
    
  })

  it('calls the updateGroceryList callback after adding a new grocery', async () => {
 
  })
})