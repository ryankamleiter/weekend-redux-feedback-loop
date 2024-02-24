import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";


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


    const [newUnderstanding, setNewUnderstanding] = useState('');

    return (
        <>
        <h2>How well are you understanding the content? (1 - 6)</h2>
            <form onSubmit={handleSubmit}>
                <input
                type="number"
                value={newUnderstanding}
                onChange={event => setNewUnderstanding(event.target.value)}
                max='6'
                min='1'
                data-testid="input"
                />
                <button type="submit" data-testid="next">Next</button>
            </form>
        </>
    )
    
}