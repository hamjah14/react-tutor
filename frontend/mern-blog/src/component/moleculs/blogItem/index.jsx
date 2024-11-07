import React from 'react'
import { RegisterBg } from '../../../assets'
// style
import './blogItem.scss'

export const BlogItem = () => {
    return (
        <div className='blog-item'>
            <img className='image-thumb' src={RegisterBg} alt='' />
            <div className='post-detail'>
                <p className='post-title'> jududl </p>
                <p className='post-author'> hamjah</p>
                <p className='post-content'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>
    )
} 