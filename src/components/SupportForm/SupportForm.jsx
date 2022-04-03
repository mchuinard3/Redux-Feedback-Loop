import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';


/*
 This component takes in a number from 1-5 that the student
 puts in regarding how well they are feeling supported, and 
 dispatches that number to redux. It then takes the student 
 to the feedback/comments page when they click on the NEXT
 button.
 */
function SupportForm() {
    console.log('In support form!')

    let [number, setNumber] = useState(0);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleNext = (event) => {
        event.preventDefault();
        if (number === 0) {
            alert('Enter a value to continue!')
        } else {
            dispatch({ type: 'ADD_SUPPORT', payload: number })
            history.push('/feedback')
        }
    }

    return (

        <section>

            <h2>How well are you being supported?</h2>

            <h3> Support? (1-5)</h3>

            <form onSubmit={handleNext} className="add-feeling-form">

                <input
                    type="number"
                    min={1}
                    max={5}
                    className="feeling"
                    value={number}
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

export default SupportForm;
