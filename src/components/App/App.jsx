import React from 'react';
import './App.css';
import FeedbackForm from '../FeedbackForm/FeedbackForm';
import FeelingForm from '../FeelingForm/FeelingForm';
import ReviewForm from '../ReviewForm/ReviewForm';
import SupportForm from '../SupportForm/SupportForm';
import ThanksForm from '../ThanksForm/ThanksForm';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm';
import { HashRouter as Router, Route } from 'react-router-dom';


/*
 This component contains the route paths for each of my other components
 so when the user clicks on the NEXT button, they are taken to the next
 appropriate page. 
 */
function App() {

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>

        <Route exact path='/'>
          <FeelingForm />
        </Route>

        <Route path='/understanding'>
          <UnderstandingForm />
        </Route>

        <Route path='/support'>
          <SupportForm />
        </Route>

        <Route path='/feedback'>
          <FeedbackForm />
        </Route>

        <Route path='/review'>
          <ReviewForm />
        </Route>

        <Route path='/thanks'>
          <ThanksForm />
        </Route>

      </div>

    </Router>
  );
}

export default App;
