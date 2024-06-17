import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginError, setLoginError] = useState('');
  
  const navigate = useNavigate();

  const onButtonClick = async () => {
    setEmailError('');
    setPasswordError('');
    setLoginError('');

    if (email === '') {
      setEmailError('Email is required');
    }

    if (password === '') {
      setPasswordError('Password is required');
    }

    if (email !== '' && password !== '') {
      try {
        const response = await fetch('http://127.0.0.1:3000/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
          // Store the token
          localStorage.setItem('token', data.token);

          // Redirect to home page
          navigate('/');
        } else {
          setLoginError(data.error || 'Login failed');
        }
      } catch (error) {
        setLoginError('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className={'mainContainer'}>
      <div className='login-title'>
        <div className={'inputContainer'}>
          <input
            value={email}
            placeholder="Enter your email here"
            onChange={(ev) => setEmail(ev.target.value)}
            className={'inputBox'}
          />
          <label className="errorLabel">{emailError}</label>
        </div>
        <br />
        <div className={'inputContainer'}>
          <input
            value={password}
            placeholder="Enter your password here"
            onChange={(ev) => setPassword(ev.target.value)}
            className={'inputBox'}
            type="password"
          />
          <label className="errorLabel">{passwordError}</label>
        </div>
        <br />
        {loginError && <label className="errorLabel">{loginError}</label>}
        <div className={'inputContainer'}>
          <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Log in'} />
        </div>
        <div className='signup-link'>
          <p>Don&apos;t have an account? <Link to="/signup">Create account</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
