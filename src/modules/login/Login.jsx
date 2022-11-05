import './login.scss';
import {useRef, useState} from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailRef = useRef();
  const passwordRef = useRef();

  const setEmailId = () => {
    setEmail(emailRef.current.value);
  }

  const onSubmit = () => {
    setPassword(passwordRef.current.value);
  }

  return (
    <div className="login">
      <div className="top">
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" />
      </div>
      <div className="login-container">
        <form className="login-form" onSubmit={onSubmit}>
          <h1>Sign In</h1>
          <input className='text' type="text" ref={emailRef} placeholder="Email or Phone number"/>
          <input className='text' type="password" ref={passwordRef} placeholder="Password"/>
          <button type='submit' className='start'>Sign in</button>
          <p>New to Netflix? <strong>Sign up now.</strong></p>
          <p>This page is protected by google reCaptcha to ensure you are a bot. <strong>Learn more.</strong></p>
        </form>
      </div>
    </div>
  );
}

export default Login;