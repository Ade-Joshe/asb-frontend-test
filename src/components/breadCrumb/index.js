import React from 'react'
import { arrowRight } from '../../assets'

export const BreadCrumb = ({ parentRoute, currentRoute }) => {
    return (
        <div className='flex crumbView'>
            <p>{parentRoute}&nbsp;</p>
            <img src={arrowRight} alt={""} />
            <p>&nbsp;{currentRoute}</p>
        </div>
    )
}
