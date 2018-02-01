import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import { shallow } from 'enzyme';
import mockData from '../mockData'
import StarWars from '../helper' 
import Button from '../Button/Button'

describe('Header', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Header />)
  })  

  it('should have a people, planets, vehicles and favorites button', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('When a user clicks on People, the fetchPeople() method is called', () => {
    
  })
})
