import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Button } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function Support() {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: "SUPPORT_ADD",
            payload: newSupport
        });
        setNewSupport('')
        history.push("/comment")
    }

    const goBack = () => {
        history.push("/understanding")
    }

    const [newSupport, setNewSupport] = useState('');

    return (
        <>
            <h2>How well are you being supported? (1 - 6)</h2>
            <form onSubmit={handleSubmit}>
                <input
                    required
                    type="number"
                    value={newSupport}
                    onChange={event => setNewSupport(event.target.value)}
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