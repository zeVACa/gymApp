import React from 'react';
import { useState, useEffect } from 'react';
import './LoginPage.css';
import { Link, Route } from 'react-router-dom';

export default function LoginPage() {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  function submitHandler(e) {
    e.preventDefault();
    console.log(e.currentTarget.value);

    alert(1);
  }

  return (
    <div>
      <div className="register-window">
        <h1>Hello from login page</h1>
        <form action="/">
          <input
            onChange={(e) => {
              setEmailValue(e.currentTarget.value);
            }}
            type="email"
            placeholder="email"
          />
          <br />
          <input
            onChange={(e) => {
              setPasswordValue(e.currentTarget.value);
            }}
            type="password"
            placeholder="password"
          />
          <br />
          {/* <AuthButton buttonText="Log in"/> */}
          <button onClick={submitHandler}>Log in</button>
        </form>
        <hr />
        {/* <Route path="/register"> */}
        <Link to="/register">Register</Link>
        {/* </Route> */}
      </div>
    </div>
  );
}
