import { useState } from 'react';
import { useDispatch, useEffect, useSelector } from 'react-redux';
import axios from 'axios';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';

function ReviewForm() {
    console.log('In review form!')
    const history = useHistory();

    const feeling = useSelector(state => state.feelingReducer)
    const support = useSelector(state => state.supportReducer)
    const understanding = useSelector(state => state.understandingReducer)
    const comments = useSelector(state => state.feedbackReducer)

    const studentFeedback = {
        feeling: feeling,
        support: support,
        understanding: understanding,
        comments: comments

    }

    const handleSubmit = (event) => {
        axios.post('/feedback', studentFeedback) 
                
        
        .then(response => {
           // history.push('/thanks');
            
        }).catch(err => {
            console.log('error in POST', err);
            
        });
    }

    return (
        <>
        <div>
           <h1>Review Your Feedback:</h1> 
           <div>Feeling: {feeling}</div>
           <div>Understanding: {understanding}</div>
           <div>Support: {support}</div>
           <div>Comments: {comments}</div>
           <button onClick={handleSubmit}
                type="submit">
                    SUBMIT
                </button>
        </div>
        </>

    )
}



export default ReviewForm;