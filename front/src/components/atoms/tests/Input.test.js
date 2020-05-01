import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import Input from "../Input/Input";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";

describe('Renders input component', () => {
  let onChange;

  beforeEach(() => {
    onChange = jest.fn();
  });

  test('with default input text', () => {
    const { container, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Input changeEvent={onChange}/>
      </ThemeProvider>
    );
    expect(container).toBeTruthy();
    const input = getByTestId('default-input');
    fireEvent.change(input, { target: { value: '123' } });
    expect(input.value).toBe('123');
  });
});
