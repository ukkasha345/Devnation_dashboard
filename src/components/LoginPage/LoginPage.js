import React, { useState } from "react";
import styles from "./style.module.css";
function LoginPage({ login }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleLogin() {
    if (email == "admin" && password == "admin") {
      login(true);
    }
  }
  return (
    <div className={styles.container}>
      <img src="/images/login-logo.png" />
      <div className={styles.login}>
        <h1>Log in to your workspace</h1>
        <p className={styles.createAcc}>
          <span>Or </span>
          <a href="#">create a new account!</a>
        </p>
        <div className={styles.input}>
          <p>Email address</p>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.input}>
          <p>Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.checkBox}>
          <div>
            <input type="checkbox" name="checkbox" />
            <label htmlFor="checkbox">Remember me</label>
          </div>
          <a href="#">Forgot your password</a>
        </div>
        <button className={styles.signInBtn} onClick={handleLogin}>
          Sign in
        </button>
      </div>
      <a href="#">DEVELOPED BY VYRASTACK</a>
    </div>
  );
}

export default LoginPage;
