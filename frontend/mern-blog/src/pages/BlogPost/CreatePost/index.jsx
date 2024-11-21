import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { confirmAlert, Alert } from 'react-confirm-alert';

// component
import { Input, Button, Upload, Textarea, Gap } from '../../../component/atoms';
import { createPost, updatePost } from '../../../config/service/api';  
import { ActionType } from '../../../config'

// style
import './createPost.scss'
import 'react-confirm-alert/src/react-confirm-alert.css';

const CreatePost = () => {     
    const navigate = useNavigate();
    const dispatch = useDispatch();  
    const { postId, postData } = useSelector(state => state.rootReducer);
    const [ isUpdate, setIsUpdate ] = useState(false) 
    const [ image, setImage ] = useState(null)
    const [ imagePrev, setImagePrev ] = useState(null) 

    const postFormik = useFormik({
        initialValues: {
            title_post: postData.title_post || '',
            body_post: postData.body_post || '',
            thumb_image: '',
        },
        validationSchema: Yup.object({
            title_post: Yup.string() 
                .required('Post Title post is required'),
            body_post: Yup.string()
                .min(6, 'Must be 6 characters or more')
                .required('Post Content is required'),
            thumb_image: Yup.string() 
                    .required('Post Image post is required'),
        }),
        enableReinitialize:true,
        onSubmit: (values) => submitPost(values),
    });
 
    const onImageUpload = (e) => { 
        const file = e.target.files[0]; 
        setImage(file)
        setImagePrev(URL.createObjectURL(file))  
    }

    const submitPost = (values) => {  
        const formDdata = new FormData();
        const aksi = isUpdate ? 'update' : 'save'
        formDdata.append('title_post', values["title_post"])
        formDdata.append('body_post', values["body_post"])
        formDdata.append('image', image)
        formDdata.append('user_id', '123')
        formDdata.append('name', 'Hamjah')

        confirmAlert({
            title: 'Confirm to ' + aksi +' post',
            message: 'Are you sure to ' + aksi +' this post?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => { 
                        if(isUpdate === false){  
                            createPost(formDdata)
                            .then((res) => {
                                alert(res.data.message) 

                                setTimeout(()=>{
                                    clearData()
                                    navigate("/");
                                }, 1500)
                            }, (err) => {  
                                alert(err.response.data.message)
                            })
                        } else { 
                            if(postId !== null && postId !== undefined && postId !== "-"){ 
                                updatePost(postId, formDdata)
                                .then((res) => {
                                    alert(res.data.message) 

                                    setTimeout(()=>{
                                        clearData()
                                        navigate("/");
                                    }, 1500)
                                }, (err) => {  
                                    alert(err.response.data.message)
                                })
                            } else {
                                alert("Iddata kosong")
                            }
                        }
                    }
                },
                {
                    label: 'No',
                    onClick: () => ''
                }
            ]
        });

        postFormik.setSubmitting(false) 
    }
     
    const homePage = () => { 
        clearData()
        navigate(-1)
    }

    const clearData = () => {   
        postFormik.resetForm() 
        setIsUpdate(false)
        setImage(null)
        setImagePrev(null) 
        dispatch({type: ActionType.CHANGE_POSTID, payload: null})   
        dispatch({type: ActionType.SET_POST_DATA, payload: {}}) 
    }
    
    useEffect(() => {   
        if(postId !== null && postId !== undefined && postId !== "-"){  
            setIsUpdate(true)  

            if(postData.thumb_image !== undefined){ 
                setImagePrev("http://localhost:4000/images/" + postData.thumb_image)  
            }
        } 
    },[postId, postData])

    return (
        <div className='create-post-post'>
            <p className='title'>{isUpdate ? 'Update' : 'Create New'} Post</p>
        
            <form onSubmit={postFormik.handleSubmit}> 
                <Input   
                    id="title_post"
                    name="title_post" 
                    label='Post Title' 
                    placeholder='Post Title' 
                    onChange={postFormik.handleChange}
                    onBlur={postFormik.handleBlur}
                    value={postFormik.values.title_post}
                />
                {postFormik.touched.title_post && postFormik.errors.title_post ? (
                    <div className='errMessage'>{postFormik.errors.title_post}</div>
                ) : null}
                <Gap height={20} />
    
                <Textarea 
                    id="body_post"
                    name="body_post"
                    type="text"
                    label='Post Content' 
                    placeholder='Post Content' 
                    onChange={postFormik.handleChange}
                    onBlur={postFormik.handleBlur}
                    value={postFormik.values.body_post}
                />
                {postFormik.touched.body_post && postFormik.errors.body_post ? (
                    <div className='errMessage'>{postFormik.errors.body_post}</div>
                ) : null}
                <Gap height={20} />
    
                <Upload 
                    id="thumb_image"
                    name="thumb_image" 
                    label='Post Images'  
                    accept=".jpg, .jpeg, .png"
                    img={imagePrev}
                    // onChange={(e) => onImageUpload(e)}
                    onChange={(e) => {postFormik.handleChange(e); onImageUpload(e); }}   
                    // onChange={(e) => { postFormik.setFieldValue('thumb_image', e.target.files[0]); onImageUpload(e); }}
                    onBlur={postFormik.handleBlur}
                    value={postFormik.values.thumb_image}
                /> 
                {postFormik.touched.thumb_image && postFormik.errors.thumb_image ? (
                    <div className='errMessage'>{postFormik.errors.thumb_image}</div>
                ) : null}
                <Gap height={20} />
    
                <div className='button-action'>
                    <Button title='Cancel' onClick={homePage} />
                    <Gap width={20} />
                    <Button 
                        title={isUpdate ? 'Update' : 'Save'} 
                        type="submit"  
                        disabled={!postFormik.isValid || postFormik.isSubmitting || (Object.keys(postFormik.touched).length === 0 && postFormik.touched.constructor === Object)}
                    />
                </div>
                <Gap height={20} />
            </form>
        </div>
    );
};

export default CreatePost