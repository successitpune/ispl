import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SuperLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Username and password are required.');
      return;
    }
    if (username === 'sit.gauravn@gmail.com' && password === '123456') {
      alert('Logged in successfully!');
      localStorage.setItem('SuperLogin', 'true'); // Set login status in localStorage
      navigate('/Superadmin'); // Navigate to the SuperAdmin page
      setUsername('');
      setPassword('');
      setError('');
    } else {
      setError('Invalid username or password.');
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Email is required.');
      return;
    }
    if (email !== 'sit.gauravn@gmail.com') {
      setError('Invalid email.');
      return;
    }
    setError('');
    setStep(3);
  };

  const handleVerifyCode = (e) => {
    e.preventDefault();
    if (code !== '1234') {
      setError('Invalid verification code.');
      return;
    }
    setError('');
    setStep(4);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (!newPassword || !confirmPassword) {
      setError('Both password fields are required.');
      return;
    }
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    setError('');
    alert('Password reset successfully!');
    localStorage.setItem('SuperLogin', 'true'); // Set login status in localStorage
    navigate('/Superadmin'); // Navigate to the SuperAdmin page
    setStep(1);
    setEmail('');
    setCode('');
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {step === 1 && (
        <form onSubmit={handleLogin} style={formStyle}>
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Login</h2>
          {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={inputStyle}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
            />
          </div>
          <button type="submit" style={buttonStyle}>
            Login
          </button>
          <button type="button" onClick={() => setStep(2)} style={linkStyle}>
            Forgot Password?
          </button>
        </form>
      )}
      {step === 2 && (
        <form onSubmit={handleForgotPassword} style={formStyle}>
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Forgot Password</h2>
          {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
            />
          </div>
          <button type="submit" style={buttonStyle}>
            Submit
          </button>
        </form>
      )}
      {step === 3 && (
        <form onSubmit={handleVerifyCode} style={formStyle}>
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Verify Code</h2>
          {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="code">Verification Code</label>
            <input
              type="text"
              id="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              style={inputStyle}
            />
          </div>
          <button type="submit" style={buttonStyle}>
            Verify
          </button>
        </form>
      )}
      {step === 4 && (
        <form onSubmit={handleResetPassword} style={formStyle}>
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Reset Password</h2>
          {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="newPassword">New Password</label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              style={inputStyle}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={inputStyle}
            />
          </div>
          <button type="submit" style={buttonStyle}>
            Reset Password
          </button>
        </form>
      )}
    </div>
  );
};

const formStyle = {
  width: '300px',
  padding: '20px',
  backgroundColor: '#f0f0f0',
  borderRadius: '8px',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)'
};

const inputStyle = {
  width: '100%',
  padding: '8px',
  fontSize: '16px',
  borderRadius: '4px',
  border: '1px solid #ccc'
};

const buttonStyle = {
  width: '100%',
  padding: '10px',
  backgroundColor: '#4caf50',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '16px',
  marginTop: '10px'
};

const linkStyle = {
  width: '100%',
  padding: '10px',
  backgroundColor: 'transparent',
  color: '#4caf50',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '16px',
  marginTop: '10px',
  textDecoration: 'underline',
  textAlign: 'center'
};

export default SuperLogin;
