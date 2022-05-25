import React from 'react'
import { arrowRight } from '../../assets'

export const BreadCrumb = ({routes}) => {
    return (
        <div className='flex crumbView'>
            {routes.map((item, index) => (
                <>
                    <p key={index}>{item.label}&nbsp; </p>
                    {index !== (routes.length - 1) && <img src={arrowRight} alt={""} />}
                </>
            ))}

        </div>
    )
}
