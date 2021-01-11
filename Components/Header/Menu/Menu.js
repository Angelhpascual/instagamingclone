import { useState } from "react";
import { Container, Menu, Grid, Icon, Label } from "semantic-ui-react";
import Link from "next/link";

import BasicModal from "../../modal/Modal/BasicModal";

export default function MenuWeb() {
  const [showModal, setShowModal] = useState(false);
  const onShowModal = () => {
    setShowModal(true);
  };
  return (
    <div className="menu">
      <Container>
        <Grid>
          <Grid.Column className="menu__left" width={6}>
            <MenuPlatform />
          </Grid.Column>
          <Grid.Column className="menu__right" width={10}>
            <MenuOptions onShowModal={onShowModal} />
          </Grid.Column>
        </Grid>
      </Container>
      <BasicModal
        show={showModal}
        setShow={setShowModal}
        title="Iniciar Sesión"
        size="small"
      >
        <h2>Contenido Modal</h2>
      </BasicModal>
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

function MenuOptions(props) {
  const { onShowModal } = props;
  return (
    <Menu>
      <Menu.Item onClick={onShowModal}>
        <Icon name="user outline" />
        Mi Cuenta
      </Menu.Item>
    </Menu>
  );
}
