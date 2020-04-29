import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import { DefaultText, MediumText, SmallText } from "../Text/Text.stories";


describe('Renders text component', () => {
  test('with default text', () => {
    const { container, getByTestId } = render(<DefaultText />);
    expect(container).toBeTruthy();
    const text = getByTestId('default-text');
    expect(text).toHaveStyleRule('font-size', '16px');
    expect(text).toHaveStyleRule('line-height', '24px');
    expect(text).toHaveStyleRule('font-weight', 'normal');
  });

  test('with medium text', () => {
    const { container, getByTestId } = render(<MediumText/>);
    expect(container).toBeTruthy();
    const text = getByTestId('medium-text');
    expect(text).toHaveStyleRule('font-size', '16px');
    expect(text).toHaveStyleRule('line-height', '24px');
    expect(text).toHaveStyleRule('font-weight', '900');
  });

  test('with small text', () => {
    const { container, getByTestId } = render(<SmallText/>);
    expect(container).toBeTruthy();
    const text = getByTestId('small-text');
    expect(text).toHaveStyleRule('font-size', '14px');
    expect(text).toHaveStyleRule('line-height', '24px');
    expect(text).toHaveStyleRule('font-weight', 'normal');
  })
});
