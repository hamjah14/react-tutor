// libraries
import React from 'react'
import { useNavigate } from "react-router-dom"

// assets
import { RegisterBg } from '../../../assets'

// style
import './postItem.scss'

// component
import { Button, Gap } from '../..'

export const PostItem = (props) => {
    const navigate = useNavigate();

    function DetailPostPage() {
        navigate("/detail-post");
    }

    return (
        <div className='post-item'>
            <img className='image-thumb' src={ "http://localhost:4000/images/" + props.data.thumb_image } alt='' />
            <div className='post-detail'>
                <p className='post-title'> {props.data.title_post} </p>
                <p className='post-author'> Hamjah </p>
                <p className='post-content'> {props.data.body_post} </p>
                <Gap height={20} />

                <div className='button-action'>
                    <Button title='View Detail' onClick={DetailPostPage}  />
                </div>
            </div>
        </div>
    )
} 