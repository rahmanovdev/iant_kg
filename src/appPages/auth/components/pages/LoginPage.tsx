"use client";
import { useState } from "react";
import styles from "./LoginPage.module.scss";

const LoginPage = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const handleSignInClick = () => {
    setIsRightPanelActive(false);
  };

  const handleSignUpClick = () => {
    setIsRightPanelActive(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className={styles.pageWrapper}>
      <div
        className={`${styles.container} ${
          isRightPanelActive ? styles.rightPanelActive : ""
        }`}
      >
        {/* Sign Up */}
        <div
          className={`${styles.container__form} ${styles["container--signup"]}`}
        >
          <form onSubmit={handleSubmit} className={styles.form} id="form1">
            <h2 className={styles.form__title}>Sign Up</h2>
            <input type="text" placeholder="User" className={styles.input} />
            <input type="email" placeholder="Email" className={styles.input} />
            <input
              type="password"
              placeholder="Password"
              className={styles.input}
            />
            <button className={styles.btn}>Sign Up</button>
          </form>
        </div>

        {/* Sign In */}
        <div
          className={`${styles.container__form} ${styles["container--signin"]}`}
        >
          <form onSubmit={handleSubmit} className={styles.form} id="form2">
            <h2 className={styles.form__title}>Sign In</h2>
            <input type="email" placeholder="Email" className={styles.input} />
            <input
              type="password"
              placeholder="Password"
              className={styles.input}
            />
            <a href="#" className={styles.link}>
              Forgot your password?
            </a>
            <button className={styles.btn}>Sign In</button>
          </form>
        </div>

        {/* Overlay */}
        <div className={styles.container__overlay}>
          <div className={styles.overlay}>
            <div
              className={`${styles.overlay__panel} ${styles["overlay--left"]}`}
            >
              <button className={styles.btn} onClick={handleSignInClick}>
                Sign In
              </button>
            </div>
            <div
              className={`${styles.overlay__panel} ${styles["overlay--right"]}`}
            >
              <button className={styles.btn} onClick={handleSignUpClick}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
