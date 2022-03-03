import React from 'react';

import AuthForm from '../../modules/AuthForm';

import './authPage.css';

export default function AuthPage(): JSX.Element {
  return (
    <div className="auth-page">
      <AuthForm />
    </div>
  );
}
