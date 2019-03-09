import React from 'react';
import ReactDOM from 'react-dom';
import App01 from './App001';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App01 />, div);
  ReactDOM.unmountComponentAtNode(div);
});
