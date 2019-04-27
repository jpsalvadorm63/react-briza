import React from 'react';
import { Container } from 'semantic-ui-react';
import {connect} from "react-redux"

import Menu from './WidgetMenu';
import Login from './WidgetLogin';

const Widget = ({lgnInf}) => (
  <div>
    <Menu />
    <Container>
      <Login logInf={lgnInf}/>
    </Container>
  </div>
);

export default connect(
  (state) => ({...state.stateLogin})
)(Widget);
