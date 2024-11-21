// libraries
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';

// component
import { PostItem } from '../../component/moleculs';
import { Button, Gap } from '../../component'; 
import { getPost, deletePost } from '../../config/service/api'; 

// style
import './home.scss';
import 'react-confirm-alert/src/react-confirm-alert.css';

const Home = () => {
    const [ currentPage, setCurrentPage ] = useState(1); 
    const [ limit, setLimit ] = useState(4); 
    const [ post, setPost ] = useState([]); 
    const [ totalPage, setTotalPage ] = useState(0); 

    const getPostData = () => {
        getPost(currentPage, limit) 
        .then((res) => { 
            const totalPage = Math.ceil(res.total_data / limit)

            setPost(res.data)  
            setTotalPage(totalPage)
            setCurrentPage(res.page)
            setLimit(res.limit)
        }, (err) => {  
            console.log("gagal get data ", err)
        })
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

    const handleDeletePost = (id) => {   
        confirmAlert({
            title: 'Confirm to delete data',
            message: 'Are you sure to delete this post?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => { 
                        deletePost(id) 
                        .then((res) => {
                            alert(res.data.message) 
                            getPostData()
                        }, (err) => {  
                            alert(err.response.data.message)
                        }) 
                    }
                },
                {
                    label: 'No',
                    onClick: () => ''
                }
            ]
        });
    }

    useEffect(() => {   
        getPostData() 
    },[currentPage, ])

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
                        return <PostItem key={post._id} id={post._id} data={post} delete={(id) => handleDeletePost(id)} />
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