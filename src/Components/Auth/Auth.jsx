import React, { useState, useEffect } from 'react';
import './Auth.css';
import Tickmark from '../Tickmark/Tickmark';

const Auth = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showTick, setShowTick] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);


  const handleToggle = () => {
    setIsLogin(!isLogin);
    setFormData({ email: '', password: '' });
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin
      ? 'https://portfolio-backend-production.onrender.com/api/user/login'
      : 'https://portfolio-backend-production.onrender.com/api/user/add';

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        const token = data.data?.token;
        if (isLogin && token) {
          localStorage.setItem('token', token);
        }

        if (!isLogin) {
          setShowTick(true); // Show tick on successful signup
        } else {
          setIsOpen(false); // Close modal on login success
        }

      } else {
        alert(data.message || 'Something went wrong');
      }
    } catch (err) {
      alert('Network error');
    }
  };

  const handleTickEnd = () => {
    setShowTick(false);
    setIsOpen(false);
  };

  return (
    <>
      {showTick && <Tickmark onAnimationEnd={handleTickEnd} />}

      {isOpen && !showTick && (
        <div className="auth-modal">
          <div className="auth-box">
            <span className="close-btn" onClick={() => setIsOpen(false)}>×</span>
            <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
            <form onSubmit={handleSubmit}>
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                name="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
            </form>
            <p className="toggle-text">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <span onClick={handleToggle}>
                {isLogin ? ' Sign up' : ' Login'}
              </span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Auth;
