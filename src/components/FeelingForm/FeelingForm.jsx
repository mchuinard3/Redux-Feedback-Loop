import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

function FeelingForm() {
    console.log('In feeling form!')

    let [number, setNumber] = useState('');
    const dispatch = useDispatch();

   

    const handleNext= (event) => {
        event.preventDefault();

       
        dispatch({ type: 'ADD_FEELING', payload: number })
    }


        
        
        return (
            <section>

                <h2>How are you feeling today?</h2>

                <h3>Feeling? (1-5)</h3>

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

                <Link to='/understanding'><button type="submit">
                    NEXT
                </button></Link>

                </form>




            </section>
        )
    }

    export default FeelingForm;




