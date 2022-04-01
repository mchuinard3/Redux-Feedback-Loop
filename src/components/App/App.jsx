import React from 'react';
import axios from 'axios';
import './App.css';
import { useState, useEffect } from 'react';
import FeedbackForm from '../FeedbackForm/FeedbackForm';
import FeelingForm from '../FeelingForm/FeelingForm';
import ReviewForm from '../ReviewForm/ReviewForm';
import SupportForm from '../SupportForm/SupportForm';
import ThanksForm from '../ThanksForm/ThanksForm';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


function App() {
  
  return (
    <Router>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      
          <ul>
            <li>
              <Link to='/feeling'>
                {/* <FeelingForm /> */}
                </Link>
            </li>
            <li>
              <Link to='/understanding'>
                {/* <UnderstandingForm /> */}
                </Link>
            </li>
            <li>
              <Link to='/support'>
                {/* <SupportForm /> */}
                </Link>
            </li>
            <li>
              <Link to='/comments'>
                {/* <FeedbackForm /> */}
                </Link>
            </li>
            <li>
              <Link to='/review'>
                {/* <ReviewForm /> */}
                </Link>
            </li>
            <li>
              <Link to='/thanks'>
                {/* <ThanksForm /> */}
                </Link>
            </li>
          </ul>
        
    </div>
    
    </Router>
  );
}

export default App;
