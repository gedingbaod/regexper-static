import React from 'react';
import { shallow } from 'enzyme';

import i18n from 'i18n';
import { LocaleSwitcher } from 'components/LocaleSwitcher';

describe('LocaleSwitcher', () => {
  test('rendering', () => {
    const component = shallow(
      <LocaleSwitcher />
    );
    expect(component).toMatchSnapshot();
  });

  test('changing language', () => {
    jest.spyOn(i18n, 'changeLanguage');

    const component = shallow(
      <LocaleSwitcher />
    );
    const selectInput = component.find('select');
    selectInput.value = 'other';
    selectInput.simulate('change', { target: { value: 'other' } });

    expect(i18n.changeLanguage).toHaveBeenCalledWith('other');
  });
});