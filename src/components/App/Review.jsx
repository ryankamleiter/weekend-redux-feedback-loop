import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function Review(props) {

    const newFeeling = useSelector(state => state.feeling);
    const newUnderstanding = useSelector(state => state.understanding)
    const newSupport = useSelector(state => state.support)
    const newComment = useSelector(state => state.comment)

    const dispatch = useDispatch();
    const history = useHistory();

    const fetchResults = () => {
        axios.get("/api/feedback")
            .then(response => {
                dispatch({ type: "REVIEW_REFRESH", payload: response.data })
                console.log(...response.data)
            })
            .catch(err => {
                console.log('error getting form results', err)
                alert('Could not fetch results')
            })
    }
    useEffect(() => {
        fetchResults();
    }, [])

    const handleSubmit = () => {
        const feedbackData = {
            feeling: newFeeling,
            understanding: newUnderstanding,
            support: newSupport,
            comment: newComment
        }
        axios.post("/api/feedback", feedbackData)
        .then(response => {
            console.log('Feedback submitted successfully:', response.data);
            history.push('/success')
        })
        .catch(err => {
            console.log('Error submitting feedback:', err);
            alert('Could not submit feedback. Please try again later.');
        });
    }

    const goBack = () => {
        history.push("/comment")
    }

    return (
        <div>
            <h2>Review Your Feedback</h2>
            <p>Feelings: {newFeeling}</p>
            <p>Understanding: {newUnderstanding}</p>
            <p>Support: {newSupport}</p>
            <p>Comment: {newComment}</p>
            <button type="button" onClick={handleSubmit} data-testid="next">Submit</button>
            <Button onClick={goBack} variant="outlined" startIcon={<ArrowBackIosIcon />}>
                Go Back
            </Button>

        </div>
    )
}