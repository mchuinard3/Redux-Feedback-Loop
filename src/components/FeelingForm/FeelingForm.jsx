import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import React from 'react';



/*
 This component takes in a number from 1-5 that the student
 puts in regarding how they are feeling, and dispatches that
 number to redux. It then takes the student to the understanding
 page when they click on the next button.
 */
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
                    className="feedback"
                    type="submit">
                    NEXT
                </button>

            </form>

        </section>
    )
}

export default FeelingForm;




