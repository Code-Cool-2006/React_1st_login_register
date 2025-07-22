import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('Registering:', email, password);
    // Save user to your backend here
    navigate('/login');
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Register</button>
      </form>
      <p style={{ marginTop: '1rem' }}>
        Already have an account?{' '}
        <button
          type="button"
          onClick={() => navigate('/login')}
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
          Login
        </button>
      </p>
    </div>
  );
};

export default Register;