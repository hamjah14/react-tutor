// libraries
import React from 'react'
import { Link } from "react-router-dom"

// component
import { BlogItem } from '../../component/moleculs'
import { Button, Gap } from '../../component'

// style
import './home.scss'

const Home = () => {
    return (
        <div className='home-page-wrapper'>
            <div className='create-wrapper'>
                <Link to='/create-blog'>
                    <Button title='Create Blog' />
                </Link>
            </div>
            <Gap height={20} />

            <div className='content-wrapper'>
                <BlogItem />
                <Gap height={15} />
                <BlogItem />
                <Gap height={15} />
                <BlogItem />
                <Gap height={15} />
                <BlogItem />
                <Gap height={15} />
                <BlogItem />
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