import React from 'react';
import ReactDOM from 'reat-dom';
import { shallow, mount } from 'enzyme';
import Poke from './Poke';

 

 

describe('Poke Component', () => {
    it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Poke/> , div);
    
    });
});