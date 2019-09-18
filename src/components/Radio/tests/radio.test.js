import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import Radio from '..'

const mountComponent = props => <Radio {...props} />;

describe('Radio component ', () => {
  it('should render radio button', () => {
    const wrapper = mount(mountComponent({id:'radioTest'}));
    expect(wrapper.find('input')).to.be.not.equal(undefined)
  });

  it('should render given label', () => {
    const wrapper = mount(mountComponent({id:'radioTest', label: 'testLabel'}));
    expect(wrapper.find('label').text()).to.be.equal('testLabel');
  });

  it('should render a disabled button if disabled prop is true', () => {
    const wrapper = mount(mountComponent({id:'radioTest', label: 'testLabel', disabled: true}));
    expect(wrapper.find('input').is('[disabled]')).to.be.true;
  });

  it('should simulate on Click', () => {
    const mockFn = jest.fn();
    const wrapper = mount(mountComponent({id:'radioTest', label: 'testLabel', onChange: mockFn}));
    wrapper.find('input').simulate('change', {target: {value: 'matched'} });
    expect(mockFn.mock.calls[0][0].target.value).to.be.equal('matched');
  });
});