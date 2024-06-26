import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Button } from "@mui/material";


export default function Feeling() {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: "FEELINGS_ADD",
            payload: newFeeling
        });
        // setNewFeeling('')
        history.push("/understanding")
    }


    const [newFeeling, setNewFeeling] = useState('');

    return (
        <>
            <h2>How are you feeling today? (1 - 6)</h2>
            <form onSubmit={handleSubmit}>
                <input
                    required
                    type="number"
                    value={newFeeling}
                    onChange={event => setNewFeeling(event.target.value)}
                    max='6'
                    min='1'
                    data-testid="input"
                />
                <Button type="submit" data-testid="next" variant="contained" endIcon={<NavigateNextIcon />}>
                    Next
                </Button>
            </form>
        </>
    )

}