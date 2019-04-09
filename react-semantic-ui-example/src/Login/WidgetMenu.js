import React from 'react';
import { Container, Image, Menu } from 'semantic-ui-react';
import Logo from "../logo.svg"

export default () => (
  <Menu>
    <Container>
      {/*<Menu.Item as="a" header>*/}
        <Image size="tiny" src={Logo} />
      {/*</Menu.Item>*/}

      <Menu.Menu position="right">
        <Menu.Item as="a" name="login">
          Login
        </Menu.Item>

        <Menu.Item as="a" name="register">
          Register
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
);
