import React from "react";

import Button from "../../UI/Button/Button";

import styles from "./Login.module.scss";

// Login/signup menu links.

const Login = () => {
  return (
    <div className={styles.login}>
      <span>Login</span>
      <Button>Sign Up</Button>
    </div>
  );
};

export default Login;
