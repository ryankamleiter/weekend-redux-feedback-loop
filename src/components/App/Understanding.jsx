import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Button } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


export default function Understanding() {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: "UNDERSTANDING_ADD",
            payload: newUnderstanding
        });
        setNewUnderstanding('')
        history.push("/support")
    }

    const goBack = () => {
        history.push("/")
    }


    const [newUnderstanding, setNewUnderstanding] = useState('');

    return (
        <>
            <h2>How well are you understanding the content? (1 - 6)</h2>
            <form onSubmit={handleSubmit}>
                <input
                    required
                    type="number"
                    value={newUnderstanding}
                    onChange={event => setNewUnderstanding(event.target.value)}
                    max='6'
                    min='1'
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