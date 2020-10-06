// set up initial state
const initialState = {
    fullSentence: ''
}

// set up our action types
const UPDATE_FULLSENTENCE = 'UPDATE_FULLSENTENCE';

// set up our action creators
export function updateFullSentence(wordStr) {
    return {
        type: UPDATE_FULLSENTENCE,
        payload: wordStr
    }
}

// set up our reducer & export default it
export default function reducer(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case UPDATE_FULLSENTENCE:
            const newSentence = state.fullSentence + ' ' + payload;

            return {
                ...state,
                fullSentence: newSentence
            }
        default: return state;
    }
}