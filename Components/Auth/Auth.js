import React, { useState } from "react";
import LoginForm from "./LoginForm/LoginForm";
import RegisterForm from "./RegisterForm/RegisterForm";
export default function Auth(props) {
  const [showLogin, setShowLogin] = useState(true);
  const { onCloseModal, setTitleModal } = props;

  const showLoginForm = () => {
    setShowLogin(true);
    setTitleModal("Iniciar Sesión");
  };

  const showRegisterForm = () => {
    setShowLogin(false);
    setTitleModal("Crear un nuevo usuario");
  };
  return showLogin ? (
    <LoginForm showRegisterForm={showRegisterForm} onCloseModal={onCloseModal}>
      Estoy en el login
    </LoginForm>
  ) : (
    <RegisterForm showLoginForm={showLoginForm}>
      Estoy en el registro
    </RegisterForm>
  );
}
