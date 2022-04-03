import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';


function FeelingForm() {
    console.log('In feeling form!')

    let [number, setNumber] = useState(0);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleNext = (event) => {
        event.preventDefault();
        if (number === 0) {
            alert('Enter a value to continue!')
        } else {
            dispatch({ type: 'ADD_FEELING', payload: number })
            history.push('/understanding')
        }
    }

    return (
        <section>

            <h2>How are you feeling today?</h2>

            <h3>Feeling? (1-5)</h3>

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

export default FeelingForm;




