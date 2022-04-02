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

      <Route exact path='/feeling'>
          
          <FeelingForm />
        </Route>

        <Route exact path='/understanding'>
          <UnderstandingForm />
        </Route>

        {/* <Route exact path='/addPizzaCheckout'>
          <PizzaCheckout />
        </Route> */}
      
         
        
    </div>
    
    </Router>
  );
}

export default App;
