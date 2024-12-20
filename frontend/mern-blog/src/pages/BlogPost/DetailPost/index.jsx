// libraries
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; 
import { Lightbox } from "react-modal-image";

// style
import './detailPost.scss';

// component
import { Button, Gap } from '../../../component/atoms' 

// redux
import { ActionType } from '../../../config'

const DetailPost = () => {
    const [ modalStatus, setModalStatus ] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();  
    const { postData, date } = useSelector(state => state.rootReducer);

    function HomePage() { 
        clearData()
        navigate(-1)
    }

    const clearData = () => {       
        dispatch({type: ActionType.CHANGE_POSTID, payload: null})   
        dispatch({type: ActionType.SET_POST_DATA, payload: {}}) 
    }

    function EditPage() {
        navigate('/edit-post');
    }
 
    function openLightbox() {
        setModalStatus(true);
    }
 
    function closeLightbox() {
        setModalStatus(false);
    }

    useEffect(() => {   
        console.log(postData)
    },[])

    return (
        <div className='detail-post-wrapper'>
            <img className='img-cover' src={ "http://localhost:4001/v1/images/" + postData.thumb_image } alt='' onClick={openLightbox} />
            <p className='post-title'>{postData.title_post}</p>
            <p className='post-author'>{postData.author_name}, {date}</p>
            <p className='post-body'>{postData.body_post}</p>

            <div className='button-action'>
                <Button title='Back' onClick={HomePage} />
                <Gap width={20} />
                <Button title='Edit' onClick={EditPage} />
                <Gap width={20} />
                <Button title='Delete' />
            </div>

              {/* The Modal */}  
            <div id="myModal" className="modal-image"> 
                <span className="close">&times;</span> 
                <img className="modal-content" id="img01" /> 
                <div className="caption"></div>
            </div>

            <Gap height={30} />
            {
                modalStatus && (
                    <Lightbox 
                        medium={ "http://localhost:4001/v1/images/" + postData.thumb_image }  
                        alt={postData.title_post} 
                        onClose={closeLightbox}
                    />
                )
            }
        </div>
    )
}

export default DetailPost
