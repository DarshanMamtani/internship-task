import React, { useState } from 'react';
import './Login.css';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase';

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if(auth)
          history.push('/home');
      })
      .catch(err => alert(err.message))
  }

  const signUp = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if(auth)
          history.push('/home');
      })
      .catch(err => alert(err.message));
  }
  

  return (
    <div className="login">
      <div className="loginContainer">
        <h2>Sign-In</h2>

        <form>
          <h5>Email</h5>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

          <h5>Password</h5>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

          <button type='submit' onClick={signIn} className="loginSignIn">Sign In</button>

          <button onClick={signUp} className="loginRegister">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Login;