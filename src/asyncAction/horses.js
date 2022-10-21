import { addManyHorseAction } from '../store/horseRedux';

const url = 'http://195.133.145.217/Horse/';

export const fetchHorses = () => {
    return (dispatch) => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                dispatch(addManyHorseAction(json));
            });
    };
};

export const deleteHorses = (id, token) => {
    return (dispatch) => {
        fetch(url + id, {
            method: 'DELETE',
            headers: {
                Authorization: 'Bearer ' + token,
            },
        }).then((x) => {
            dispatch(fetchHorses());
        });
    };
};

export const createHorses = (formData, navigate, token) => {
    return (dispatch) => {
        fetch(url, {
            method: 'POST',
            body: formData,
            headers: {
                Authorization: 'Bearer ' + token,
            },
        })
            .then((respose) => {
                // addHorsesAction({
                //     id: -1,
                //     title: title,
                //     shortDesc: shortDesc,
                //     fullDesc: fullDesc,
                // });
                dispatch(fetchHorses());
                // navigate('/Breeds');
            })
            .catch((error) => {
                console.log(error);
            });
    };
};
