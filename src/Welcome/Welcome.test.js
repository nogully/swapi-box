import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './Welcome';
import { shallow } from 'enzyme';

describe('Welcome', () => {
  let wrapper 
  let mockFilm

  beforeEach(() => {
    mockFilm = {  "title": "A New Hope", 
                  "episode_id": 4,
                  "opening_crawl": "It is a period of civil war." }
    wrapper = shallow(<Welcome randomFilm={ mockFilm }/>)
  })  

  it('should exist and match snapshot', () => {
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  })

})
