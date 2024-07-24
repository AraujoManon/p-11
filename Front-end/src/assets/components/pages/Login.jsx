import React, { useState, useEffect } from 'react';
import { Button } from '../Buttons';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../redux/reducers/AuthActions'; 
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }))
      .unwrap()
      .then((response) => {
        console.log('Login successful:', response);
      })
      .catch((err) => {
        console.log('Login failed:', err);
      });
  };

  useEffect(() => {
    if (success) {
      navigate('/user'); 
    }
  }, [success, navigate]);

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>

        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">Login Successful!</p>}
        
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <div className="input-remember">
            <input 
              type="checkbox" 
              id="remember-me" 
              checked={rememberMe} 
              onChange={(e) => setRememberMe(e.target.checked)} 
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <Button 
            text={loading ? 'Signing In...' : 'Sign In'}
            type="submit"
            disabled={loading}
          />
        </form>
      </section>
    </main>
  );
};

export default Login;
