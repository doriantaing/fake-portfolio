import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import Button from "../Button/Button";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";

describe('Renders button component', () => {
  let eventClick;

  beforeEach(() => {
    eventClick = jest.fn();
  });

  test('with default button', () => {
    const { container, getByTestId } = render(<ThemeProvider theme={theme}><Button clickEvent={eventClick}/></ThemeProvider>);
    expect(container).toBeTruthy();
    const button = getByTestId('default-button');
    button.click();
    expect(eventClick).toHaveBeenCalled();
  });
});
