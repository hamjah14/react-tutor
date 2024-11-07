import React from 'react'
import { RegisterBg } from '../../../assets'
// style
import './blogItem.scss'

export const BlogItem = () => {
    return (
        <div className='blog-item'>
            <img className='image-thumb' src={RegisterBg} alt='' />
            <div className='blog-detail'>
                <p className='blog-title'> jududl </p>
                <p className='blog-author'> hamjah</p>
                <p className='blog-content'> blalvalalala</p>
            </div>
        </div>
    )
} 