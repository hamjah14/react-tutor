// libraries
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"

// component
import { PostItem } from '../../component/moleculs'
import { Button, Gap } from '../../component'

import { getPostAPI } from '../../config/service/api'

// style
import './home.scss'

const Home = () => {
    const [ post, setPost ] = useState([])

    const getPost = () => {
        getPostAPI('?page=1&limit=4').then(
            result => { 
                setPost(result.data)
            }
        )
    }

    useEffect(() => {   
        if (post !== undefined && post.length == 0) { 
            getPost()
        }   
    })

    return (
        <div className='home-page-wrapper'>
            <div className='create-wrapper'>
                <Link to='/create-post'>
                    <Button title='Create Post' />
                </Link>
            </div>
            <Gap height={20} />

            <div className='content-wrapper'>
                {/* <PostItem />
                <Gap height={15} />
                <PostItem />
                <Gap height={15} />
                <PostItem />
                <Gap height={15} />
                <PostItem />
                <Gap height={15} />
                <PostItem /> */}

                {
                    post.map(post => {
                        // return <PostItem key={post.id} data={post} edit={this.handleEditDataFromApi} remove={this.handleRevomePostToApi} />
                        return <PostItem key={post._id} data={post} />
                    })
                }
            </div>

            <div className='pagination'>
                <Button title='Previous' />
                <Gap width={20} />
                <Button title='next' />
            </div>
            <Gap height={20} />
        </div>
    )
}

export default Home