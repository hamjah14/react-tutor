import React from 'react'

// style
import './upload.scss'

// component
import { LoginBg } from '../../../assets'

export const Upload = ({ label, ...rest }) => {
    return (
        <div className='upload-wrapper'>
            <div className='upload-input'>
                <p className='label'>{label}</p>
                <input className='upload' type='file' {...rest} />
            </div>
            <div className='upload-preview'>
                <img className='preview-img' src={LoginBg} alt='' />
            </div>
        </div>
    )
}
