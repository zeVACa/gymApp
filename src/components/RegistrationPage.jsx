import React from 'react';
import { Link } from 'react-router-dom';

function RegistrationPage() {
  return (
    <div>
      <h2>hello from register page</h2>
      <form action="/register">
        <label htmlFor="field-email">enter password again</label> <br />
        <input type="email" id="field-email" placeholder="email" />
        <br />
        <label htmlFor="field-password">enter password</label> <br />
        <input type="password" id="field-password" placeholder="password" />
        <br />
        <label htmlFor="field-password-again">enter password again</label> <br />
        <input type="password" id="field-password-again" placeholder="password again" />
        <br />
        <button
          onClick={(e) => {
            e.preventDefault();
          }}
          type="submit">
          register
        </button>
        <br />
      </form>

      <Link to="/login">back to log in </Link>
    </div>
  );
}

export default RegistrationPage;
