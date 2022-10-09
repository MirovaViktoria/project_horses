const url = 'http://195.133.145.217/Auth/';

export const Editing = (navigate) => {
    return (dispatch) => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((respose) => respose.text())
            .then((token) => {
                // dispatch(authAction(token));
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
            });
    };
};
