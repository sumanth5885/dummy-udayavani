import { responsiveImages } from '@/app/data'
import React from 'react'
import './ResponsiveImage.scss'

const ResponsiveImage = () => {

    return (
        <picture className='responsive_img'>
            <source media="(min-width: 1024px)" srcSet={responsiveImages.desktop} />
            <source media="(min-width: 768px)" srcSet={responsiveImages.tablet} />
            <img src={responsiveImages.mobile} alt="Responsive image" />
        </picture>

    )
}

export default ResponsiveImage