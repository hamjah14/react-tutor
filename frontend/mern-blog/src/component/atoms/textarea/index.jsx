import React from 'react'

// style
import './textarea.scss'

export const Textarea = ({ label, ...rest }) => {
    return (
        <div className='text-wrapper'>
            <p className='label'>{label}</p>
            <textarea className='text-area' {...rest} />
        </div>
    )
}
