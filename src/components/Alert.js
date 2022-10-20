import { Alert } from '@mui/material';
import { useSelector } from 'react-redux';

export const AlertError = (navigate) => {
    const error = useSelector((state) => state.rootReducer.auth.error);

    if (error != null)
        return (
            <Alert severity='error'>Invalid data entered — check it out!</Alert>
        );
    else return <div></div>;
};
