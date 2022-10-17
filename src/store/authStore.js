let token = localStorage.getItem('token');
const defaultState = {
    auth: { token: token },
    error: null,
};
const AUTH = 'AUTH';
const AUTH_ERROR = 'AUTH_ERROR';
const REMOVE = 'REMOVE';

export const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case AUTH:
            return {
                ...state,
                auth: { token: action.payload },
            };
        case AUTH_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        case REMOVE:
            return {
                ...state,
                auth: { token: null },
            };

        default:
            return state;
    }
};
export const authError = (payload) => ({
    type: AUTH_ERROR,
    payload,
});
export const authAction = (payload) => ({
    type: AUTH,
    payload,
});
export const removeAction = (payload) => ({
    type: REMOVE,
    payload,
});
