import { screen, render } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import App from './App';

describe('renders learn react link', () => {
  it("Testa-se o input e titulo sao reederizado na tela", () => {
    render(<App />);
    const input = screen.getByRole("textbox")
    expect(input) 
    const title = screen.getByRole('heading', { name: /como está o tempo hoje/i, level: 1 });
    expect(title)
  });
  it("Testa-se é passada a informação que está no input atravez do enter", () => {
    render(<App />);
    const input = screen.getByRole("textbox")
    userEvent.type(input, "Barra Mansa")
    userEvent.keyboard("{Enter}")
  });

});
