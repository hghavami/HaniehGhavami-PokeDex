import React from 'react';
import { shallow, mount } from 'enzyme';
import PokeInfo from './PokeInfo';

let PokeInfoComponent;
beforeEach(() => {
    PokeInfoComponent = shallow(<PokeInfo></PokeInfo>);
});

 

describe('PokeInfo Component', () => {

    it('renders children passed via props', () => {
        PokeInfoComponent.setProps({
            name: 'Hello World!',
        });
        expect(PokeInfoComponent.text()).toBe('Hello World!');
    });
});