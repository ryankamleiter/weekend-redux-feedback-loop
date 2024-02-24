import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";


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
                <button type="submit" data-testid="next">Next</button>
            </form>
        </>
    )
    
}