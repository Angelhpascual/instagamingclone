import React from "react";
import { Container, Menu, Grid, Icon, Label } from "semantic-ui-react";
import Link from "next/link";

export default function MenuWeb() {
  return (
    <div className="menu">
      <Container>
        <Grid>
          <Grid.Column className="menu__left" width={6}>
            <MenuPlatform />
          </Grid.Column>
          <Grid.Column className="menu__right" width={10}>
            <MenuOptions />
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}

function MenuPlatform() {
  return (
    <Menu>
      <Link href="/play-station">
        <Menu.Item as="a">PlayStation</Menu.Item>
      </Link>
      <Link href="/x-box">
        <Menu.Item as="a">Xbox</Menu.Item>
      </Link>
      <Link href="/switch">
        <Menu.Item as="a">Switch</Menu.Item>
      </Link>
    </Menu>
  );
}

function MenuOptions() {
  return (
    <Menu>
      <Menu.Item>
        <Icon name="user outline" />
        Mi Cuenta
      </Menu.Item>
    </Menu>
  );
}
