// libraries
import React from 'react'
import { useNavigate } from "react-router-dom"

// style
import './detailPost.scss'

// component
import { Button, Gap } from '../../../component/atoms'
import { RegisterBg } from '../../../assets'

const DetailPost = () => {
    const navigate = useNavigate();

    function HomePage() {
        navigate("/");
    }
    function EditPage() {
        navigate("/edit-post");
    }

    return (
        <div className='detail-post-wrapper'>
            <img className='img-cover' src={RegisterBg} alt='' />
            <p className='post-title'>Title Post</p>
            <p className='post-author'>Author - Date Post</p>
            <p className='post-body'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

            <div className='button-action'>
                <Button title='Back' onClick={HomePage} />
                <Gap width={20} />
                <Button title='Edit' onClick={EditPage} />
                <Gap width={20} />
                <Button title='Delet' />
            </div>
        </div>
    )
}

export default DetailPost
