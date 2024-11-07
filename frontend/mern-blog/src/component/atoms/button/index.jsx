import React from 'react'
import './button.scss'

export const Button = ({ title, ...rest }) => {
    return (
        <button className='button'  {...rest}>{title}</button>
    )
}
