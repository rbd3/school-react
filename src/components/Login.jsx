import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../assets/login.css'
import { Link } from 'react-router-dom'

const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const navigate = useNavigate()

  const onButtonClick = () => {
    setEmailError('')
    setPasswordError('')

    if (email === '') {
      setEmailError('Email is required')
    }

    if (password === '') {
      setPasswordError('Password is required')
    }

    if (email === ' ' && password === ' ') {
      navigate('/') // Redirect to home page
  }
}

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
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Log in'} />
      </div>
      <div className='signup-link'>
        <p>Don't have an account? <Link to="/signup">Create account</Link></p>
        </div>
        </div>
    </div>
  )
}

export default Login