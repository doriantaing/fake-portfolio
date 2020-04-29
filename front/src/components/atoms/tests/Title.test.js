import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import { H1, H2, H3, ProjectTitle } from "../Title/Title.stories";

describe('Renders title component', () => {
  test('with title of type h1', () => {
    const { container, getByTestId } = render(<H1 />);
    expect(container).toBeTruthy();
    const title = getByTestId('h1-title');
    expect(title).toHaveStyleRule('font-size', '38px');
    expect(title).toHaveStyleRule('line-height', 'normal');
    expect(title).toHaveStyleRule('font-weight', '900');
  });

  test('with title of type h2', () => {
    const { container, getByTestId } = render(<H2 />);
    expect(container).toBeTruthy();
    const title = getByTestId('h2-title');
    expect(title).toHaveStyleRule('font-size', '32px');
    expect(title).toHaveStyleRule('line-height', '42px');
    expect(title).toHaveStyleRule('font-weight', '900');
  });

  test('with title of type h3', () => {
    const { container, getByTestId } = render(<H3/>);
    expect(container).toBeTruthy();
    const title = getByTestId('h3-title');
    expect(title).toHaveStyleRule('font-size', '24px');
    expect(title).toHaveStyleRule('line-height', '32px');
    expect(title).toHaveStyleRule('font-weight', '900');
  });

  test('with project title', () => {
    const { container, getByTestId } = render(<ProjectTitle />);
    expect(container).toBeTruthy();
    const title = getByTestId('project-title');
    expect(title).toHaveStyleRule('font-size', '24px');
    expect(title).toHaveStyleRule('line-height', '32px');
    expect(title).toHaveStyleRule('font-weight', '900');
  })
});
