// libraries
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// component
import { PostItem } from '../../component/moleculs';
import { Button, Gap } from '../../component'; 
import { getPostAPI } from '../../config/service/api';
import { actionSetPage } from '../../config/redux/action'

// style
import './home.scss';

const Home = () => {
    const [ post, setPost ] = useState([]); 
    const [ totalPage, setTotalPage ] = useState(0);
    // const [ prevPage, setPrevPage ] = useState(0);
    // const [ nextPage, setNextPage ] = useState(0);
    const { page, limit } = useSelector(state => state.homeReducer);
    const dispatch = useDispatch(); 

    const getPost = () => {
        getPostAPI(`?page=${page}&limit=${limit}`).then(
            result => { 
                const totalPage = Math.ceil(result.total_data / limit)

                setPost(result.data)  
                setTotalPage(totalPage)
                dispatch(actionSetPage(result.page)) 
            }
        )
    }

    const handlePrevPage = () => {
        const newPage = parseInt(page) - 1;
  
        if(page > 1){
            dispatch(actionSetPage(newPage)) 
        }
    }

    const handleNextPage = () => {
        const newPage = parseInt(page) + 1;

        if(page < totalPage){ 
            dispatch(actionSetPage(newPage)) 
        }
    }

    useEffect(() => {   
        getPost() 
    },[page])

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
            <Gap height={20} />

            <div className='pagination'> 
                {
                    page > 1 ? (<Button title='Previous' onClick={handlePrevPage} />) : null
                }
                
                <Gap width={40} />
                <p className='text-page'>{page} / {totalPage}</p>
                <Gap width={40} />

                {
                    page < totalPage ? (<Button title='next' onClick={handleNextPage} />) : null
                }
                
            </div>
            <Gap height={20} />
        </div>
    )
}

export default Home