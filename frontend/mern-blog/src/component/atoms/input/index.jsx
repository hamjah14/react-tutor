import React from 'react'
import './input.scss'

export const Input = ({ label, ...rest }) => {
    return (
        <div className='input-wrapper'>
            <p className='label'>{label}</p>
            <input className='input' {...rest} />
        </div>
    )
} 