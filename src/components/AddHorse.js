import '../index.css';

import React, { useState } from 'react';

import { createHorses } from '../asyncAction/horses';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function AddHorse() {
    const [file, setFile] = useState(null);
    const [fileDataURL, setFileDataURL] = useState(null);
    const [title, setTitle] = useState();
    const [shortDesc, setShortDesc] = useState();
    const [fullDesc, setFullDesc] = useState();
    let navigate = useNavigate();

    const auth = useSelector((state) => state.rootReducer.auth.auth);
    useEffect(() => {
        if (auth.token === undefined) {
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
                <h1>React File Upload</h1>
                <input className='title' type='text' onChange={onChangeTitle} />
                <textarea type='text' onChange={onChangeShortDesc}></textarea>
                <textarea type='text' onChange={onChangeFullDesc}></textarea>
                <label className='uploadbutton'>
                    <input
                        type='file'
                        id='image'
                        accept='.png, .jpg, .jpeg'
                        onChange={handleChange}
                        className={isButtonVisible ? '' : 'hidden'}
                    />
                    {fileDataURL ? (
                        <p className='img-preview-wrapper'>
                            {<img src={fileDataURL} alt='preview' />}
                        </p>
                    ) : null}
                </label>

                <button className='submit' type='submit'>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default AddHorse;
