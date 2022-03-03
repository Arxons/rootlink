import React, { SyntheticEvent, useEffect, useState, createRef } from 'react';

import useHttp from '../../components/Hooks/http.hook';
import { containsLetters, defaultBodyForm, from6To60, validateEmail } from '../../components/constants';

import AuthographSVG from '../../svg/AuthographSVG';
import LoadingSVG from '../../svg/LoadingSVG';
import LockSVG from '../../svg/LockSVG';
import MinUserSVG from '../../svg/MinUserSVG';
import UserSVG from '../../svg/UserSVG';

import './authForm.css';

export default function AuthForm(): JSX.Element {
  const [isLogin, setIsLogin] = useState(true);
  const [isAble, setIsAble] = useState(true);
  const [form, setForm] = useState(defaultBodyForm);
  const { isLoading, request } = useHttp();
  const [error, setError] = useState('');
  const nameInput: React.RefObject<HTMLInputElement> = createRef();
  const emailInput: React.RefObject<HTMLInputElement> = createRef();
  const passwordInput: React.RefObject<HTMLInputElement> = createRef();

  const handleClick = (): void => {
    if (nameInput.current) {
      (nameInput.current as HTMLInputElement).value = '';
    }

    (emailInput.current as HTMLInputElement).value = '';
    (passwordInput.current as HTMLInputElement).value = '';
    setIsAble(!isAble);
    setError('');

    setTimeout(() => setIsLogin(!isLogin), 300);
  };

  useEffect(() => setIsAble(true), [isLogin]);

  const handleChange = (e: SyntheticEvent): void => {
    setForm({ ...form, [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement).value });
  };

  const handleSubmit = async (e: SyntheticEvent): Promise<void> => {
    e.preventDefault();

    const endpoint = isLogin ? '/login' : '/register';
    if (!from6To60.test(form.password) || !containsLetters.test(form.password)) {
      setError('Minimal password length 6 characters and contains only latin characters');
    } else if (!validateEmail.test(form.email)) {
      setError('Incorrect email');
    } else {
      try {
        const headers = {
          'Content-Type': 'application/json',
        };
        const data = await request(`/api/auth${endpoint}`, 'POST', JSON.stringify({ ...form }), headers);
        // eslint-disable-next-line no-console
        console.log(data);
        setError('');
      } catch (err: any) {
        setError(err.message);
      }
    }
  };

  const formPrefix = isAble ? '' : 'disable';

  if (isLogin) {
    return (
      <form className={`auth-form ${formPrefix}`} method="POST" onSubmit={handleSubmit}>
        {isLoading && <LoadingSVG />}
        {!isLoading && <UserSVG />}
        {error && <div className="auth-error">{error}</div>}
        <div className="email-container">
          <MinUserSVG />
          <input className="user-email" type="email" name="email" placeholder="EMAIL" onChange={handleChange} ref={emailInput} />
        </div>
        <div className="password-container">
          <LockSVG />
          <input
            className="user-password"
            type="password"
            name="password"
            placeholder="PASSWORD"
            onChange={handleChange}
            ref={passwordInput}
          />
        </div>
        <button className="auth-button" type="submit" disabled={isLoading}>
          LOGIN
        </button>
        <h2 className="register-title">Don&apos;t have an account?</h2>
        <button className="auth-button" type="button" onClick={handleClick} disabled={isLoading}>
          REGISTER
        </button>
      </form>
    );
  }

  return (
    <form className={`auth-form ${formPrefix}`} method="POST" onSubmit={handleSubmit}>
      {isLoading && <LoadingSVG />}
      {!isLoading && <UserSVG />}
      {error && <div className="auth-error">{error}</div>}
      <div className="name-container">
        <AuthographSVG />
        <input
          className="user-name"
          type="text"
          name="userName"
          placeholder="YOUR NICKNAME"
          onChange={handleChange}
          ref={nameInput}
        />
      </div>
      <div className="email-container">
        <MinUserSVG />
        <input className="user-email" type="email" name="email" placeholder="EMAIL" onChange={handleChange} ref={emailInput} />
      </div>
      <div className="password-container">
        <LockSVG />
        <input
          className="user-password"
          type="password"
          name="password"
          placeholder="PASSWORD"
          onChange={handleChange}
          ref={passwordInput}
        />
      </div>
      <button className="auth-button" type="submit" disabled={isLoading}>
        REGISTER
      </button>
      <h2 className="register-title">Already have an account?</h2>
      <button className="auth-button" type="button" onClick={handleClick} disabled={isLoading}>
        LOGIN
      </button>
    </form>
  );
}
