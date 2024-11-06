import React from 'react'
import { Link as Ling } from "react-router-dom"
import './link.scss'

export const Link = ({ text, path, ...rest }) => {
    return (
        <div>
            <Ling className='link' to={path}>{text}</Ling>
        </div>
    )
}
