// libraries
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Lightbox } from "react-modal-image";
 
// style
import './postItem.scss';

// component
import { Button, Gap } from '../..';

// redux
import { ActionType } from '../../../config'; 
import { actionSetPostData } from '../../../config/redux/action' 

export const PostItem = (props) => { 
    const [ modalStatus, setModalStatus ] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch(); 

    function DetailPostPage() {
        dispatch({type: ActionType.CHANGE_POSTID, payload: props.id})
        dispatch(actionSetPostData(props.id));    
        navigate("/detail-post")
    }
     
    function EditPostPage() { 
        dispatch({type: ActionType.CHANGE_POSTID, payload: props.id})
        dispatch(actionSetPostData(props.id));    
        navigate('/edit-post');
    }
      
    function openLightbox() {
        setModalStatus(true);
    }
 
    function closeLightbox() {
        setModalStatus(false);
    }

    const tanggal = new Date(props.data.created_at).toISOString().split("T")[0]
  
    return (
        <div className='post-item'>
            <img className='image-thumb' src={ "http://localhost:4001/v1/images/" + props.data.thumb_image } alt='' onClick={openLightbox} />
            <div className='post-detail'>
                <p className='post-title'> {props.data.title_post} </p>
                <p className='post-author'> {props.data.author_name}, { tanggal } </p>
                 
                <p className='post-content'> {props.data.body_post} </p>
                <Gap height={20} />

                <div className='action-wrapper'>
                    <Button title='View' onClick={DetailPostPage}  />
                    <Gap width={20} />
                    <Button title='Edit' onClick={EditPostPage}  />
                    <Gap width={20} />
                    <Button title='Delete' onClick={() => props.delete(props.id)} />
                </div>
            </div>

            {
                modalStatus && (
                    <Lightbox 
                        medium={ "http://localhost:4001/v1/images/" + props.data.thumb_image }  
                        alt={props.data.title_post} 
                        onClose={closeLightbox}
                    />
                )
            }
        </div>
    )
} 