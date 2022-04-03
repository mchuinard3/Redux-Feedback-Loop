import { useState } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';


function FeedbackForm() {
    console.log('In feedback form!')

    let [comment, setComment] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleNext = (event) => {
        event.preventDefault();
        if (comment === '') {
            alert('Enter a value to continue!')
        } else {
            dispatch({ type: 'ADD_FEEDBACK', payload: comment })
            history.push('/review')
        }
    }

    return (

        <section>

            <h2>Any comments you want to leave?</h2>

            <h3> Comments: </h3>

            <form onSubmit={handleNext} className="add-feeling-form">

                <input
                    type="text"
                    size={90}
                    className="feeling"
                    value={comment}
                    onChange={(event) => setComment(event.target.value)}
                />

                <button onClick={handleNext}
                    type="submit">
                    NEXT
                </button>

            </form>

        </section>
    )
}

export default FeedbackForm;
