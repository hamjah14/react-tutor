// libraries
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// component
import { PostItem } from '../../component/moleculs';
import { Button, Gap } from '../../component'; 
import { getPost } from '../../config/service/api'; 

// style
import './home.scss';

const Home = () => {
    const [ currentPage, setCurrentPage ] = useState(1); 
    const [ limit, setLimit ] = useState(4); 
    const [ post, setPost ] = useState([]); 
    const [ totalPage, setTotalPage ] = useState(0); 

    const getPostData = () => {
        getPost(`?page=${currentPage}&limit=${limit}`).then(
            result => { 
                const totalPage = Math.ceil(result.total_data / limit)

                setPost(result.data)  
                setTotalPage(totalPage)
                setCurrentPage(result.page)
                setLimit(result.limit)
            }
        )
    }

    const handlePrevPage = () => {
        const newPage = parseInt(currentPage) - 1;
  
        if(currentPage > 1){
            setCurrentPage(newPage)
        }
    }

    const handleNextPage = () => {
        const newPage = parseInt(currentPage) + 1;

        if(currentPage < totalPage){ 
            setCurrentPage(newPage)
        }
    }

    useEffect(() => {   
        getPostData() 
    },[currentPage])

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
                        return <PostItem key={post._id} id={post._id} data={post} />
                    })
                }
            </div>
            <Gap height={20} />

            <div className='pagination'> 
                {
                    currentPage > 1 ? (<Button title='Previous' onClick={handlePrevPage} />) : null
                }
                
                <Gap width={40} />
                <p className='text-page'>{currentPage} / {totalPage}</p>
                <Gap width={40} />

                {
                    currentPage < totalPage ? (<Button title='next' onClick={handleNextPage} />) : null
                }
                
            </div>
            <Gap height={20} />
        </div>
    )
}

export default Home