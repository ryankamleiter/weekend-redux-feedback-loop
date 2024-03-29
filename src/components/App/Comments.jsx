import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Button } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


export default function Comment() {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: "COMMENT_ADD",
            payload: newComment
        });
        setNewComment('')
        history.push('/review')
    }

    const goBack = () => {
        history.push("/support")
    }


    const [newComment, setNewComment] = useState('');

    return (
        <>
            <h2>Any comments you want to leave?</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newComment}
                    onChange={event => setNewComment(event.target.value)}
                    placeholder="Enter any comments"
                    data-testid="input"
                />
                <Button type="submit" data-testid="next" variant="contained" endIcon={<NavigateNextIcon />}>
                    Next
                </Button>
            </form>
            <Button onClick={goBack} variant="outlined" startIcon={<ArrowBackIosIcon />}>
                Go Back
            </Button>
        </>
    )

}