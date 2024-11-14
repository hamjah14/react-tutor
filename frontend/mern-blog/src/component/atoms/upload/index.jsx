import React from 'react'

// style
import './upload.scss'
  
export const Upload = ({ label, img, ...rest }) => {
    return (
        <div className='upload-wrapper'>
            <div className='upload-input'>
                <p className='label'>{label}</p>
                <input className='upload' type='file' {...rest} />
            </div>
            <div className='upload-preview'>
                { img && <img className='preview-img' src={img} alt='' /> }
            </div>
        </div>
    )
}
