import { useState } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';


function UnderstandingForm() {
    console.log('In understanding form!')

    let [number, setNumber] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();



    const handleNext = (event) => {
        event.preventDefault();
        if (number === '') {
            alert('Enter a value to continue!')
        } else {
            dispatch({ type: 'ADD_UNDERSTANDING', payload: number })
            history.push('/support')
        }



    }

    return (
        <section>

            <h2>How well are you understanding the content?</h2>

            <h3> Understanding? (1-5)</h3>

            <form onSubmit={handleNext} className="add-feeling-form">

                <input
                    type="number"

                    className="feeling"
                    value={number}
                    min={1}
                    max={5}
                    onChange={(event) => setNumber(event.target.value)}

                />

                <button onClick={handleNext}
                    type="submit">
                    NEXT
                </button>


            </form>

        </section>
    )
}

export default UnderstandingForm;
