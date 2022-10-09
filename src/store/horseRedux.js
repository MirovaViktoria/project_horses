const defaultState = {
    horses: [],
};
const ADD_HORSE = 'ADD_HORSE';
const REMOVE_HORSE = 'REMOVE_HORSE';
const ADD_MANY_HORSES = 'ADD_MANY_HORSES';
const ADD_PHOTO_HORSES = 'ADD_PHOTO_HORSES';

export const horseReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_MANY_HORSES:
            return {
                ...state,
                horses: action.payload,
            };
        case ADD_PHOTO_HORSES:
            return {
                ...state,
                horses: [...state.horses, ...action.payload],
            };
        case ADD_HORSE:
            return {
                ...state,
                horses: [...state.horses, action.payload],
            };
        case REMOVE_HORSE:
            return {
                ...state,
                horses: state.horses.filter(
                    (horses) => horses.id !== action.payload
                ),
            };
        default:
            return state;
    }
};

export const addHorsesAction = (payload) => ({
    type: ADD_HORSE,
    payload,
});
export const addManyHorseAction = (payload) => ({
    type: ADD_MANY_HORSES,
    payload,
});
export const addPhotoHorsesAction = (payload) => ({
    type: ADD_PHOTO_HORSES,
    payload,
});
export const removeHorsesAction = (payload) => ({
    type: REMOVE_HORSE,
    payload,
});
