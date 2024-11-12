// libraries
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
 
// style
import './postItem.scss';

// component
import { Button, Gap } from '../..';

// redux
import { ActionType } from '../../../config';

export const PostItem = (props) => { 
    const navigate = useNavigate();
    const dispatch = useDispatch(); 

    function DetailPostPage() {
        dispatch({type: ActionType.CHANGE_POSTID, payload: props.id})
        navigate("/detail-post")
    }
     
    const tanggal = new Date(props.data.createdAt).toISOString().split("T")[0]
  
    return (
        <div className='post-item'>
            <img className='image-thumb' src={ "http://localhost:4000/images/" + props.data.thumb_image } alt='' />
            <div className='post-detail'>
                <p className='post-title'> {props.data.title_post} </p>
                <p className='post-author'> {props.data.author_name}, { tanggal } </p>
                <p className='post-content'> {props.data.body_post} </p>
                <Gap height={20} />

                <div className='button-action'>
                    <Button title='View Detail' onClick={DetailPostPage}  />
                </div>
            </div>
        </div>
    )
} 