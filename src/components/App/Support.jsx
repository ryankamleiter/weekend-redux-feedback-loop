import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";


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


    const [newSupport, setNewSupport] = useState('');

    return (
        <>
        <h2>How well are you being supported? (1 - 6)</h2>
            <form onSubmit={handleSubmit}>
                <input
                type="number"
                value={newSupport}
                onChange={event => setNewSupport(event.target.value)}
                max='6'
                min='1'
                data-testid="input"
                />
                <button type="submit" data-testid="next">Next</button>
            </form>
        </>
    )
    
}