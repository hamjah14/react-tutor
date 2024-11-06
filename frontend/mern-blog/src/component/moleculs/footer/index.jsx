import React from 'react'
import './footer.scss'
import { GhilbiLogo, FbIcon, IgIcon, LinkIcon, TelIcon, TwIcon, WaIcon, } from '../../../assets'

const Icon = ({ img }) => {
    return (
        <div className='icon-wrapper'>
            <img className='icon-medsos' src={img} alt='' />
        </div>
    )
}


export const Footer = () => {
    return (
        <div>
            <div className='footer'>
                <div>
                    <img className='company-logo' src={GhilbiLogo} alt='' width={70} height={60} />
                </div>

                <div className='social-wrapper'>
                    <Icon img={FbIcon} />
                    <Icon img={IgIcon} />
                    <Icon img={TwIcon} />
                    <Icon img={TelIcon} />
                    <Icon img={WaIcon} />
                    <Icon img={LinkIcon} />
                </div>
            </div>

            <div className='copyright'>
                <p>Copyright</p>
            </div>
        </div>
    )
}
