import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import Device from './Device';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><Device /></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
