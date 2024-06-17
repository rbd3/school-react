import '../assets/signup.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [role, setRole] = useState('');
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const onButtonClick = async () => {
    setErrors({});

    const newErrors = {};
    if (firstName === '') newErrors.firstName = 'First Name is required';
    if (lastName === '') newErrors.lastName = 'Last Name is required';
    if (email === '') newErrors.email = 'Email is required';
    if (password === '') newErrors.password = 'Password is required';
    if (passwordConfirmation === '') newErrors.passwordConfirmation = 'Password Confirmation is required';
    if (role === '') newErrors.role = 'Role is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:3000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          user: {
            first_name: firstName, 
            last_name: lastName, 
            email, 
            password, 
            password_confirmation: passwordConfirmation, 
            role 
          }
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Store the token
        localStorage.setItem('token', data.token);

        // Redirect to home page
        navigate('/');
      } else {
        setErrors({ signup: data.errors.join(', ') || 'Signup failed' });
      }
    } catch (error) {
      setErrors({ signup: 'An error occurred. Please try again.' });
    }
  };

  return (
    <div className={'mainContainer'}>
      <div className='signup-title'>
        <div className={'inputContainer'}>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder='First Name'
          />
          <div className='error'>{errors.firstName}</div>
        </div>
        <div className={'inputContainer'}>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder='Last Name'
          />
          <div className='error'>{errors.lastName}</div>
        </div>
        <div className={'inputContainer'}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
          />
          <div className='error'>{errors.email}</div>
        </div>
        <div className={'inputContainer'}>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            type='password'
          />
          <div className='error'>{errors.password}</div>
        </div>
        <div className={'inputContainer'}>
          <input
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            placeholder='Password Confirmation'
            type='password'
          />
          <div className='error'>{errors.passwordConfirmation}</div>
        </div>
        <div className={'inputContainer'}>
          <input
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder='Role'
          />
          <div className='error'>{errors.role}</div>
        </div>
        <button onClick={onButtonClick}>Signup</button>
        <div className='error'>{errors.signup}</div>
      </div>
    </div>
  );
};

export default Signup;

 