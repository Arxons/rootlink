import React, { SyntheticEvent, useEffect, useState } from 'react';

import AuthographSVG from '../../svg/AuthographSVG';
import LockSVG from '../../svg/LockSVG';
import MinUserSVG from '../../svg/MinUserSVG';
import UserSVG from '../../svg/UserSVG';

import './authForm.css';

export default function AuthForm(): JSX.Element {
  const [isLogin, setIsLogin] = useState(true);
  const [isAble, setIsAble] = useState(true);

  const handleClick = (): void => {
    setIsAble(!isAble);
    setTimeout(() => setIsLogin(!isLogin), 300);
  };

  useEffect(() => setIsAble(true), [isLogin]);

  const handleSubmit = (e: SyntheticEvent): void => {
    e.preventDefault();
  };

  const formPrefix = isAble ? '' : 'disable';

  if (isLogin) {
    return (
      <form className={`auth-form ${formPrefix}`} method="POST" onSubmit={handleSubmit}>
        <UserSVG />
        <div className="email-container">
          <MinUserSVG />
          <input className="user-email" type="email" name="user-email" placeholder="EMAIL" />
        </div>
        <div className="password-container">
          <LockSVG />
          <input className="user-password" type="password" name="user-password" placeholder="PASSWORD" />
        </div>
        <button className="auth-button" type="submit">
          LOGIN
        </button>
        <h2 className="register-title">Don&apos;t have an account?</h2>
        <button className="auth-button" type="button" onClick={handleClick}>
          REGISTER
        </button>
      </form>
    );
  }

  return (
    <form className={`auth-form ${formPrefix}`} method="POST" onSubmit={handleSubmit}>
      <UserSVG />
      <div className="name-container">
        <AuthographSVG />
        <input className="user-name" type="text" name="user-name" placeholder="YOUR NICKNAME" />
      </div>
      <div className="email-container">
        <MinUserSVG />
        <input className="user-email" type="email" name="user-email" placeholder="EMAIL" />
      </div>
      <div className="password-container">
        <LockSVG />
        <input className="user-password" type="password" name="user-password" placeholder="PASSWORD" />
      </div>
      <button className="auth-button" type="submit">
        REGISTER
      </button>
      <h2 className="register-title">Already have an account?</h2>
      <button className="auth-button" type="button" onClick={handleClick}>
        LOGIN
      </button>
    </form>
  );
}
