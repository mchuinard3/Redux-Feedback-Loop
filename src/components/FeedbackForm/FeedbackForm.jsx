import { useState } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';


function FeedbackForm() {
    console.log('In feedback form!')

    let [comment, setComment] = useState('');
    const dispatch = useDispatch();



    const handleNext = (event) => {
        event.preventDefault();


        dispatch({ type: 'ADD_FEEDBACK', payload: comment })
    }

    return (
        <section>

            <h2>Any comments you want to leave?</h2>
            
            <h3> Comments: </h3>

            <form onSubmit={handleNext} className="add-feeling-form">

            <input
                type="text"
                required
                className="feeling"
                value={comment}
                
                onChange={(event) => setComment(event.target.value)}

            />

            <Link to='/review'><button type="submit">
                NEXT
            </button></Link>


            </form>

        </section>
    )
}

export default FeedbackForm;
