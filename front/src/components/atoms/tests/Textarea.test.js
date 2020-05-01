import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import Textarea from "../Textarea/Textarea";

describe('Renders textarea component', () => {
  let onChange;

  beforeEach(() => {
    onChange = jest.fn();
  });

  test('with default textarea text', () => {
    const { container, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Textarea changeEvent={onChange} testId="default-textarea" />
      </ThemeProvider>
    );
    expect(container).toBeTruthy();
    const textarea = getByTestId('default-textarea');
    fireEvent.change(textarea, { target: { value: '123' } });
    expect(textarea.value).toBe('123');
  });
});
