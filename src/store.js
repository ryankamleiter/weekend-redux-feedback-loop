import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";


const feeling = (state = [], action) => {
    if (action.type === "FEELINGS_ADD") {
        console.log(`feeling added: ${action.payload}`);
        return action.payload
    }
    return state
}

const understanding = (state = [], action) => {
    if (action.type === "UNDERSTANDING_ADD") {
        console.log(`understanding added: ${action.payload}`);
        return action.payload
    }
    return state
}

const support = (state = [], action) => {
    if (action.type === "SUPPORT_ADD") {
        console.log(`support added: ${action.payload}`);
        return action.payload
    }
    return state
}

const comment = (state = [], action) => {
    if (action.type === "COMMENT_ADD") {
        console.log(`comment added: ${action.payload}`);
        return action.payload
    }
    return state
}

const review = (state = [], action) => {
    if (action.type === "REVIEW_REFRESH") {
        console.log('review: ', {...action.payload});
        return {...action.payload}
    }
    return state
}
const store = createStore(
    combineReducers({
        feeling,
        review,
        understanding,
        support,
        comment,
    }),
    applyMiddleware(logger)
)
export default store;