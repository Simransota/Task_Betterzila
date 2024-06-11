import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    setIsRightPanelActive(!isRightPanelActive);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`container ${isRightPanelActive ? 'right-panel-active' : ''} ${darkMode ? 'dark-mode' : ''}`} id="container">
      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <span className="big-circle">
        <span className={`inner-circle ${darkMode ? 'dark-inner-circle' : ''}`}></span>
      </span>
      {/* <img src="https://i.imgur.com/wcGWHvx.png" className="square" alt="" /> */}
      <div className="form-container sign-up-container">
        <form action="#">
          <h1>Create Account</h1>
          <div className="social-container">
            <a href="#" className="social">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="social">
              <FontAwesomeIcon icon={faGooglePlusG} />
            </a>
            <a href="#" className="social">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
          <span>or use your email for registration</span>
          <div className="infield">
            <input type="text" placeholder="Name" />
            <label ></label>
          </div>
          <div className="infield">
            <input type="email" placeholder="Email" name="email"/>
            <label></label>
          </div>
          <div className="infield">
            <input type="password" placeholder="Password" />
            <label></label>
          </div>
          <button>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form action="#">
          <h1>Sign in</h1>
          <div className="social-container">
            <a href="#" className="social">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="social">
              <FontAwesomeIcon icon={faGooglePlusG} />
            </a>
            <a href="#" className="social">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
          <span>or use your account</span>
          <div className="infield">
            <input type="email" placeholder="Email" name="email"/>
            <label></label>
          </div>
          <div className="infield">
            <input type="password" placeholder="Password" />
            <label></label>
          </div>
          <a href="#" className="forgot">Forgot your password?</a>
          <button>Sign In</button>
        </form>
      </div>
      <div className={`overlay-container ${darkMode? 'dark-overlay-container' : ''}`} id="overlayCon">
  <div className={`overlay ${darkMode? 'dark-overlay' : ''}`}>
    <div className={`overlay-panel overlay-left ${darkMode? 'dark-overlay-panel' : ''}`}>
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button onClick={handleToggle}>Sign In</button>
          </div>
          <div className={`overlay-panel overlay-right ${darkMode? 'dark-overlay-panel' : ''}`}>
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button id="signUpBtn" onClick={handleToggle}>Sign Up</button>
          </div>
        </div>
        <button id="overlayBtn" onClick={handleToggle}></button>
      </div>
    </div>
  );
}

export default App;
