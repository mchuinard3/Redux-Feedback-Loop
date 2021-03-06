import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';


/*
 This component takes in a number from 1-5 that the student
 puts in regarding how well they feel that they are understanding 
 the material, and dispatches that number to redux. It then
 takes the student to the support page when they click on the
 NEXT button.
 */
function UnderstandingForm() {
    console.log('In understanding form!')

    let [number, setNumber] = useState(0);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleNext = (event) => {
        event.preventDefault();
        if (number === 0) {
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
                    className="feedback"
                    type="submit">
                    NEXT
                </button>

            </form>

        </section>
    )
}

export default UnderstandingForm;
