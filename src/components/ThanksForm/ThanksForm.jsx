import { useHistory } from 'react-router-dom';


/*
 This component displays a thank you page on the 
 DOM with HTML tags. It also contains a button
 that says Leave New Feedback. When this button 
 is clicked on, it takes the user/student back 
 to the feeling page and allows them to make a
 brand new submission again from the beginning. 
 */
function ThanksForm() {
    console.log('In thank you form!')

    const history = useHistory();

    const handleSubmit = (event) => {
        history.push('/');
    }

    return (
        <>
            <div className="add-feeling-form">
                <h1>Thank You!</h1>
                <button onClick={handleSubmit}
                    className="feedback"
                    type="submit">
                    Leave New Feedback
                </button>
            </div>
        </>

    )
}

export default ThanksForm; 