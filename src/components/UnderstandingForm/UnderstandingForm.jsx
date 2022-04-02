import { useState } from 'react';
import axios from 'axios';

function UnderstandingForm() {
    console.log('In understanding form!')
    return (
        <section>

            <h2>How well are you understanding the content?</h2>

            <input
                //onChange={handleNameChange} 
                required
                type="number"
                className="feeling"
                placeholder="Understanding? (1-5)"
                maxLength={5}

            />

            <Link to='/addPizzaCheckout'><button type="submit">
                NEXT
            </button></Link>




        </section>
    )
}

export default UnderstandingForm;
