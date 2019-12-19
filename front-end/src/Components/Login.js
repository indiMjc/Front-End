import React, { useState } from 'react';

const Login = props => {
  const [user, setuser] = useState({
    username: '',
    password: ''
  });

  const handleChange = e => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form>
        <label>
          Username:
          <input
            type='text'
            name='username'
            value={user.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type='password'
            name='password'
            value={user.password}
            onChange={handleChange}
          />
        </label>
      </form>
      <button>Login</button>
    </>
  );
};

export default Login;
