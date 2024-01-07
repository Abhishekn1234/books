import Card from 'antd/es/card/Card';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate= useNavigate();
  const [error, setError] = useState('');

  const handleSignup = () => {
    // Simulate user creation logic
    // For simplicity, just redirect to login after "signup"
    navigate('/login');
  };

  return (
    <div><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <Card>
      <h1>Signup</h1><br/><br/>
      <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br/>
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <br/><br/>
      <p>Do you have an account <Link to="/login">Login</Link></p>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleSignup} className='btn btn primary'>Signup</button>
      </Card>
    </div>
  );
};

export default Signup;
