// libraries
import React from 'react'
import { Link } from "react-router-dom"

// style
import './detailBlog.scss'

// component
import { Button, Gap } from '../../../component/atoms'
import { RegisterBg } from '../../../assets'

const DetailBlog = () => {
    return (
        <div className='detail-blog-wrapper'>
            <img className='img-cover' src={RegisterBg} alt='' />
            <p className='blogt-title'>Title Blog</p>
            <p className='blog-author'>Author - Date Post</p>
            <p className='blog-body'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

            <div className='button-action'>
                <Button title='Back' />
            </div>
        </div>
    )
}

export default DetailBlog
