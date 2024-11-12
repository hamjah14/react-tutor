// libraries
import React from 'react'
import { useNavigate } from "react-router-dom"

// component
import { Input, Button, Upload, Textarea, Gap } from '../../../component/atoms'

// style
import './createPost.scss'

const CreatePost = () => {
    const navigate = useNavigate();

    function HomePage() {
        navigate("/");
    }

    return (
        <div className='create-post-post'>
            <p className='title'>Create New Post</p>
             
            <Input label='Post Title' placeholder='Post Title' /> 
            <Gap height={20} />

            <Textarea label='Post Content' />
            <Gap height={20} />

            <Upload label='Post Images' />
            <Gap height={20} />

            <div className='button-action'>
                <Button title='Cancel' onClick={HomePage} />
                <Gap width={20} />
                <Button title='Save' />
            </div>
            <Gap height={20} />
        </div>
    )
}

export default CreatePost
