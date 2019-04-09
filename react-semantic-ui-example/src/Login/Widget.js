import React from 'react';
import { Container } from 'semantic-ui-react';

import Menu from './WidgetMenu';
import Login from './WidgetLogin';

const Widget = () => (
  <div>
    <Menu />
    <Container>
      <Login />
    </Container>
  </div>
);

export default Widget;
