/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


describe('App', () => {
  const wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('exists and matches snapshot', () => {
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  it('has a helper function which returns clean data', () => {
   
  })

  it('has ', () => {

  })
}


