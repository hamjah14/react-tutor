// libraries
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// component
import { PostItem } from '../../component/moleculs';
import { Button, Gap } from '../../component'; 
import { getPostAPI } from '../../config/service/api';
import { ActionType, Reducer } from '../../config'

// style
import './home.scss';

const Home = () => {
    const [ post, setPost ] = useState([]); 
    const { page, limit } = useSelector(state => state.homeReducer);
    const dispatch = useDispatch(); 

    const getPost = () => {
        getPostAPI(`?page=${page}&limit=${limit}`).then(
            result => { 
                setPost(result.data) 
 
                // dispatch({type: ActionType.CHANGE_PAGE, payload: 4})
            }
        )
    }

    useEffect(() => {   
        getPost()  
    },[])

    return (
        <div className='home-page-wrapper'>
            <div className='create-wrapper'>
                <Link to='/create-post'>
                    <Button title='Create Post' />
                </Link>
            </div>
            <Gap height={20} />

            <div className='content-wrapper'> 
                {
                    post.map(post => { 
                        return <PostItem key={post._id} data={post} />
                    })
                }
            </div>

            <div className='pagination'>
                <Button title='Previous' />
                <Gap width={20} />
                <Button title={page} />
                <Gap width={20} />
                <Button title='next' />
            </div>
            <Gap height={20} />
        </div>
    )
}

export default Home