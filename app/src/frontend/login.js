// Frontend
import { useState } from 'react';
import axios from 'axios';
import './contact.css';

const Auth = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [showLogin, setShowLogin] = useState(true); // State to toggle between login and register forms

  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:5000/register', formData);
      console.log('Registration successful');
    } catch (error) {
      console.log(error);
      alert('Registration failed');
    }
  }

  const handleLogin = async () => {
    try {
      await axios.post('http://localhost:5000/login', formData);
      alert('Login successful');
      window.location.href = '/home';
    } catch (error) {
      alert('Login failed');
    }
  };

  return (
    <div className="auth-container">
      <div className="button-container">
        <button onClick={() => setShowLogin(true)}>Login</button>
        <button onClick={() => setShowLogin(false)}>Register</button>
      </div>
      <div className="auth-card">
        <h1><b>{showLogin ? 'Login' : 'Register'}</b></h1>
        <form className='card-form'>
          <label htmlFor="username" style={{ marginLeft: '22px', }}>
            <p>Username<span>*</span></p>
          </label>
          <input
            className='log'
            type="text"
            name="username"
            id="username"
            placeholder='Enter your username'
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            required
          />
          <br />
          <label htmlFor="password" style={{ marginLeft: '22px', }}>
            <p>Password<span>*</span></p>
          </label>
          <input
            className='log'
            type="password"
            name="password"
            id="password"
            placeholder='Enter your password'
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
          <br />
          {showLogin && <p className="forgot-password">Forgot Password?</p>}
          <button className='button' type="button" onClick={showLogin ? handleLogin : handleRegister}>
            {showLogin ? 'Login' : 'Register'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
