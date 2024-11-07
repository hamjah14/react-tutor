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
                <p className='post-content'> blalvalalala</p>
            </div>
        </div>
    )
} 