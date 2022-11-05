import { useRef, useState } from 'react';
import './register.scss';

function Register() {
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
    <div className="register">
      <div className="top">
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" />
        <button className="login-button">Sign In</button>
      </div>
      <div className="register-form">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h3>Watch anywhere, cancel anytime</h3>
        <p>Ready to watch. Enter your email to create or restart your membership</p>
        {email ? (
          <form className="password" onSubmit={onSubmit}>
          <input className='text' type="password" ref={passwordRef} placeholder="Password"/>
          <button type='submit' className='start'>Start</button>
        </form>
        ) : (
          <div className="email">
            <input className='text' type="text" ref={emailRef}  placeholder="Email or Phone number"/>
            <button className='get-started' onClick={setEmailId}>Get Started</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Register;