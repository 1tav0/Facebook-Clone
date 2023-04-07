export const initialState = { //inital state of the reducer, what the data looks like initially
    user: null,
};

export const actionTypes = { //we have some actions to dispatch into the data we have when we have some data  
    SET_USER: "SET_USER",
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user,
            };
        default:
            return state;
    }
};

export default reducer;