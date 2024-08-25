
import React from 'react';

const RegisterPage = () => {
  return (
    <div>
      <h1>Register</h1>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="username"  required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email"  required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password"  required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
