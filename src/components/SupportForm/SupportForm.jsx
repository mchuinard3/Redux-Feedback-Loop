import { useState } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';


function SupportForm() {
    console.log('In support form!')

    let [number, setNumber] = useState('');
    const dispatch = useDispatch();



    const handleNext = (event) => {
        event.preventDefault();


        dispatch({ type: 'ADD_SUPPORT', payload: number })
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
                    required
                    className="feeling"
                    value={number}
                    
                    onChange={(event) => setNumber(event.target.value)}

                />

                <Link to='/feedback'><button type="submit">
                    NEXT
                </button></Link>


            </form>

        </section>

    
    )
}

export default SupportForm;
