import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', email, password);
    // You can add logic to verify credentials here
    navigate('/dashboard');
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
      <p style={{ marginTop: '1rem' }}>
        Don't have an account?{' '}
        <button
          type="button"
          onClick={() => navigate('/register')}
          style={{
            background: 'none',
            border: 'none',
            color: '#4676D7',
            cursor: 'pointer',
            textDecoration: 'underline',
            padding: 0,
            fontSize: '1rem',
            fontWeight: '600',
          }}
        >
          Register
        </button>
      </p>
    </div>
  );
};

export default Login;