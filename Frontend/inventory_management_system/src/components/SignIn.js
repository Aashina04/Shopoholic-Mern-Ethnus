import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    // Add authentication logic here (e.g., API call)
    if (email && password) {
      console.log('Sign-In Successful');
      navigate('/home'); // Navigate to Home page after sign-in
    } else {
      alert('Please enter valid credentials');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="card p-4 shadow" style={{ width: '400px', borderRadius: '10px' }}>
        <h2 className="text-center mb-4" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', color: '#343a40' }}>
          Sign In
        </h2>
        <form onSubmit={handleSignIn}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label" style={{ fontWeight: 'bold' }}>
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label" style={{ fontWeight: 'bold' }}>
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-dark w-100" style={{ fontSize: '16px' }}>
            Sign In
          </button>
        </form>
        <p className="text-center mt-3" style={{ fontSize: '14px', color: '#6c757d' }}>
          Don't have an account? <a href="/signup" style={{ color: '#007bff' }}>Sign Up</a>
        </p>
      </div>
    </div>
  );
}