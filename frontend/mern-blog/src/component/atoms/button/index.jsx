import React from 'react'
import './button.scss'

export const Button = ({ title, ...rest }) => {
    return (
        <div>
            <button className='button'  {...rest}>{title}</button>
        </div>
    )
}
