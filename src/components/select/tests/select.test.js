import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import Select from '..'


const selectOptions = ['a', 'b', 'c'];

const mountComponent = props => <Select {...props} options ={selectOptions} />;

describe('Select component ', () => {
  it('should render component', () => {
    const wrapper = mount(mountComponent({id: 'selectDropdown'}));
    expect(wrapper.find('select')).to.be.not.equal(undefined)
  })

  it('should render select with given options along with default option', () => {
    const wrapper = mount(mountComponent());
    expect(wrapper.find('select').children().length).to.equal(selectOptions.length + 1);
  })
});