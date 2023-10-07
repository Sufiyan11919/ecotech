import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const res = await fetch('/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (res.status === 400) {
        window.alert('Invalid Credentials');
        console.log('Invalid Credentials');
      } else if (res.ok) {
        const data = await res.json();
        console.log('Login Successful:', data);
        window.alert('Login Successful');
        navigate('/home');
      } else {
        console.error('Error occurred during login:', res.status, res.statusText);
        window.alert('An error occurred during login. Please try again later.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      window.alert('An unexpected error occurred. Please try again later.');
    }
  };
  

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center">Login</h2>
              <form method='POST' onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                    className="form-control"
                    autoComplete='off'
                    placeholder='Enter email'
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="form-control"
                    placeholder='Enter password'
                    autoComplete='off'
                    required
                  />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;