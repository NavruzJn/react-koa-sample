import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import Devices from './Devices';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><Devices /></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
