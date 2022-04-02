import { useState } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';


function UnderstandingForm() {
    console.log('In understanding form!')

    let [number, setNumber] = useState('');
    const dispatch = useDispatch();



    const handleNext = (event) => {
        event.preventDefault();


        dispatch({ type: 'ADD_UNDERSTANDING', payload: number })
    }

    return (
        <section>

            <h2>How well are you understanding the content?</h2>
            
            <h3> Understanding? (1-5)</h3>

            <form onSubmit={handleNext} className="add-feeling-form">

            <input
                type="number"
                required
                className="feeling"
                value={number}
                min={1}
                max={5}
                onChange={(event) => setNumber(event.target.value)}

            />

            <Link to='/support'><button type="submit">
                NEXT
            </button></Link>


            </form>

        </section>
    )
}

export default UnderstandingForm;
