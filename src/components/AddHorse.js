import '../index.css';

import React, { useState } from 'react';

import { Alert } from '@mui/material';
import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import SendIcon from '@mui/icons-material/Send';
import { TextField } from '@mui/material';
import { createHorses } from '../asyncAction/horses';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// import TextareaAutosize from '@mui/base/TextareaAutosize';

function AddHorse() {
    const [file, setFile] = useState(null);
    const [fileDataURL, setFileDataURL] = useState(null);
    const [title, setTitle] = useState();
    const [shortDesc, setShortDesc] = useState();
    const [fullDesc, setFullDesc] = useState();
    let navigate = useNavigate();

    const auth = useSelector((state) => state.rootReducer.auth.auth);
    useEffect(() => {
        if (auth.token === null) {
            navigate('/autorization');
        }
    });

    const [isButtonVisible, setButtonVisible] = useState(true);
    const dispatch = useDispatch();
    function handleChange(e) {
        const file = e.target.files[0];
        setFile(file);
        setButtonVisible(false);
    }
    useEffect(() => {
        let fileReader,
            isCancel = false;
        if (file) {
            fileReader = new FileReader();
            fileReader.onload = (e) => {
                const { result } = e.target;
                if (result && !isCancel) {
                    setFileDataURL(result);
                }
            };
            fileReader.readAsDataURL(file);
        }
        return () => {
            isCancel = true;
            if (fileReader && fileReader.readyState === 1) {
                fileReader.abort();
            }
        };
    }, [file]);
    const onChangeTitle = (event) => {
        setTitle(event.target.value);
    };
    const onChangeShortDesc = (event) => {
        setShortDesc(event.target.value);
    };
    const onChangeFullDesc = (event) => {
        setFullDesc(event.target.value);
    };
    function handleSubmit(event) {
        event.preventDefault();
        if (file == null) {
            return;
        }
        const formData = new FormData();
        formData.append('title', title);
        formData.append('shortDesc', shortDesc);
        formData.append('fullDesc', fullDesc);
        formData.append('image', file);
        dispatch(createHorses(formData, navigate, auth.token));
    }

    return (
        <div className='addHorse'>
            <form className='submit_horses' onSubmit={handleSubmit}>
                <h1>Добавить новые элементы</h1>
                <label className='uploadbutton'>
                    <div>
                        {file == null && (
                            <Alert severity='error'>
                                empty value — check it out!
                            </Alert>
                        )}
                        <IconButton
                            color='primary'
                            aria-label='upload picture'
                            component='label'
                        >
                            <input
                                type='file'
                                hidden
                                id='image'
                                accept='.png, .jpg, .jpeg'
                                onChange={handleChange}
                                className={isButtonVisible ? '' : 'hidden'}
                            />
                            <PhotoCamera />
                        </IconButton>
                    </div>

                    {fileDataURL ? (
                        <p className='img-preview-wrapper'>
                            {<img src={fileDataURL} alt='preview' />}
                        </p>
                    ) : null}
                </label>
                <TextField
                    value={title}
                    required
                    id='Title'
                    label='Title'
                    multiline
                    maxRows={2}
                    style={{ width: 206, margin: 5, fontSize: 12 }}
                    onChange={onChangeTitle}
                />
                <TextField
                    value={shortDesc}
                    required
                    id='ShortDesc'
                    label='ShortDesc'
                    multiline
                    maxRows={2}
                    style={{ width: 700, margin: 5, fontSize: 12 }}
                    onChange={onChangeShortDesc}
                ></TextField>

                <TextField
                    value={fullDesc}
                    required
                    id='FullDesc'
                    label='FullDesc'
                    multiline
                    maxRows={4}
                    style={{ width: 700, margin: 5, fontSize: 12 }}
                    onChange={onChangeFullDesc}
                ></TextField>

                <div className='button_submit'>
                    <Button
                        className='submit'
                        type='submit'
                        variant='contained'
                        endIcon={<SendIcon />}
                    >
                        Отправить
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default AddHorse;
