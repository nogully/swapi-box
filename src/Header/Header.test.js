import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import { shallow } from 'enzyme';

describe('Header', () => {
  let wrapper
  let mockFetchData
  let mockDisplayFavorites 
  let mockEvent

  beforeEach(() => {
    mockFetchData = jest.fn()
    mockDisplayFavorites = jest.fn()
    wrapper = shallow(<Header fetchData={ mockFetchData } displayFavorites={ mockDisplayFavorites } />)
  })  

  it('should have a people, planets, vehicles and favorites button', () => {
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  })

  it('When a user clicks on People, the fetchData() method is called', () => { 
    wrapper.find('button').first().simulate('click')
    expect(mockFetchData).toHaveBeenCalled()
  })

})
