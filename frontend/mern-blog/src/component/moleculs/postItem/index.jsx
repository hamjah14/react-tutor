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
import { actionSetPostData } from '../../../config/redux/action' 

export const PostItem = (props) => { 
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
     
    const tanggal = new Date(props.data.createdAt).toISOString().split("T")[0]
  
    return (
        <div className='post-item'>
            <img className='image-thumb' src={ "http://localhost:4000/images/" + props.data.thumb_image } alt='' />
            <div className='post-detail'>
                <p className='post-title'> {props.data.title_post} </p>
                <p className='post-author'> {props.data.author_name}, { tanggal } </p>
                
                {/* <div className='author-wrapper'>  
                    <div className='action-wrapper'>
                        <p className='edit'>Edit</p> | <p className='delete'>Delete</p> 
                    </div>
                </div> */}
                
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
        </div>
    )
} 