import { useSelector } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


/*
 This component brings in the reducers from redux and sets
 their state as variables. Those variables are then placed
 in an object called studentFeedback, and returned in HTML
 tags so the data from the student entries is displayed on 
 the DOM. It also contains an axios.post route that allows
 the data from the studentFeedback object to be stored in
 the database. Finally, it takes thr student to the thank 
 you page when they click on the SUBMIT button. 
 */
function ReviewForm() {
    console.log('In review form!')
    
    const history = useHistory();
    const feeling = useSelector(state => state.feelingReducer)
    const support = useSelector(state => state.supportReducer)
    const understanding = useSelector(state => state.understandingReducer)
    const comments = useSelector(state => state.feedbackReducer)

    const studentFeedback = {
        feeling: feeling,
        support: support,
        understanding: understanding,
        comments: comments

    }

    const handleSubmit = (event) => {
        axios.post('/feedback', studentFeedback)

            .then(response => {
                history.push('/thanks');

            }).catch(err => {
                console.log('error in POST', err);

            });
    }

    return (
        <>
            <div>
                <h1>Review Your Feedback:</h1>
                <div>Feeling: {feeling}</div>
                <div>Understanding: {understanding}</div>
                <div>Support: {support}</div>
                <div>Comments: {comments}</div>
                <button onClick={handleSubmit}
                    type="submit">
                    SUBMIT
                </button>
            </div>
        </>
    )
}

export default ReviewForm;