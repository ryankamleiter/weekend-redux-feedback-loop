import { useHistory } from "react-router-dom";

export default function Reset(){

    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        history.push('/')
    }


    return (
        <>
            <h2>Thank you! Feedback submitted successfully.</h2>
            <button data-testid="next" onClick={handleSubmit}>Leave New Feedback</button>
        </>
    )
}