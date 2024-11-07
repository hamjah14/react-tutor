import React from 'react'

// component
import { Input, Button, Upload, Textarea, Gap } from '../../../component/atoms'

// style
import './createBlog.scss'

const CreateBlog = () => {
    return (
        <div className='create-blog-post'>
            <p className='title'>Create New Blog</p>
            <div className='post-header'>
                <div className='header-title'>
                    <Input label='Post Title' placeholder='Post Title' />
                </div>
                <div className='header-author'>
                    <Input label='Post Author' placeholder='Post Author' />
                </div>
            </div>
            <Gap height={20} />

            <Textarea label='Post Content' />
            <Gap height={20} />

            <Upload label='Post Images' />
            <Gap height={20} />

            <div className='button-action'>
                <Button title='Save' />
            </div>
            <Gap height={20} />
        </div>
    )
}

export default CreateBlog
