let token = localStorage.getItem('token');
const defaultState = {
    auth: { token: token },
};
const AUTH = 'AUTH';
const REMOVE = 'REMOVE';

export const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case AUTH:
            return {
                ...state,
                auth: { token: action.payload },
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

export const authAction = (payload) => ({
    type: AUTH,
    payload,
});
export const removeAction = (payload) => ({
    type: REMOVE,
    payload,
});
