import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom'

// component
import { Input, Button, Upload, Textarea, Gap } from '../../../component/atoms'
import { createPost } from '../../../config/service/api'; 

// style
import './createPost.scss'

const CreatePost = () => {
    const navigate = useNavigate();
    const [ image, setImage ] = useState(null)
    const [ imagePrev, setImagePrev ] = useState(null) 

    const postFormik = useFormik({
        initialValues: {
            title_post: '',
            body_post: '',
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
        onSubmit: (values) => submitPost(values),
    });
 
    const onImageUpload = (e) => { 
        const file = e.target.files[0];
        // postFormik.setFieldValue('thumb_image', value)
        // postFormik.setValues({ ...postFormik.values, "thumb_image": 'shshs' }) 
        // postFormik.setValues({ ...postFormik.values, ...{thumb_image: 'shshs'} })
        setImage(file)
        setImagePrev(URL.createObjectURL(file))  
    }

    const submitPost = (values) => {    
        const formDdata = new FormData();
        formDdata.append('title_post', values["title_post"])
        formDdata.append('body_post', values["body_post"])
        formDdata.append('image', image)
        formDdata.append('user_id', '123')
        formDdata.append('name', 'Hamjah')
            
        // createPost(formDdata)
        // .then((res) => {
        //     alert(res.data.message) 
 
        //     if(res.data.code === "201"){
        //         postFormik.resetForm() 

        //         setTimeout(()=>{
        //             navigate("/");
        //         }, 3000)
        //     }
        // }, (err) => {  
        //     console.log("hasil 2", err.message)
        // })

        postFormik.setSubmitting(false) 
    }
     
    const homePage = () => {
        navigate("/");
    }
    
    return (
        <div className='create-post-post'>
            <p className='title'>Create New Post</p>
        
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
                        title='Save' 
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