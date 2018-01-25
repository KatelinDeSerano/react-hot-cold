import {RESTART_GAME, MAKE_GUESS, GENERATE_AURAL_UPDATE} from './actions';

const initialState = {
    guesses: [34,56,89],
    feedback: 'Make your guess!',
    auralStatus: '',
    correctAnswer: Math.round(Math.random() * 100) + 1
};

export default (state = initialState, action ) => {
    if(action.type === RESTART_GAME) {
        return Object.assign({}, state ,{
            guesses: [],
            feedback: 'Make your guess!',
            aurelStatus: '',
            correctAnswer: action.correctAnswer  
        });
    }
    return state;
};

