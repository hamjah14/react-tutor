// libraries
import React from 'react'
import { useNavigate } from "react-router-dom"

// assets
import { RegisterBg } from '../../../assets'

// style
import './blogItem.scss'

// component
import { Button, Gap } from '../../../component'

export const BlogItem = () => {
    const navigate = useNavigate();

    function DetailBlogPage() {
        navigate("/detail-blog");
    }
    return (
        <div className='blog-item'>
            <img className='image-thumb' src={RegisterBg} alt='' />
            <div className='post-detail'>
                <p className='post-title'> Lorem Ipsum </p>
                <p className='post-author'> Hamjah</p>
                <p className='post-content'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Gap height={20} />

                <div className='button-action'>
                    <Button title='View Detail' onClick={DetailBlogPage} />
                </div>
            </div>
        </div>
    )
} 