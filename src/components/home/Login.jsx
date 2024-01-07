

import Card from 'antd/es/card/Card';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleLogin = () => {
    
     try{
      navigate('/');
     }
      catch(error){
        console.log(error);
      }
    
  };

  return (
    <div><br/><br/><br/><br/><br/><br/><br/><br/>
     <Card>
      <h1>Login</h1><br/>
      <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <br/><br/>
      
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <br/><br/>
      <p>I don't have account <Link to="/signup">Create </Link></p>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleLogin} style={{backgroundColor:"red"}}>Login</button>
      </Card>
    </div>
    
  );
};

export default Login;
