import { useHistory } from 'react-router-dom';

function ThanksForm() {
    console.log('In thank you form!')

    const history = useHistory();

    const handleSubmit = (event) => {
        history.push('/');
    }

    return (
        <>
            <div>
                <h1>Thank You!</h1>
                <button onClick={handleSubmit}
                    type="submit">
                    Leave New Feedback
                </button>
            </div>
        </>

    )
}

export default ThanksForm; 