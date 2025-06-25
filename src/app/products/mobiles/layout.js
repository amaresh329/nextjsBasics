import React from 'react'
import MobileDiscount from './MobileDiscount'

export const metadata={
    title:"mobiles Page",
    description:"Best Laptops available here in the whole city"
}

export default function layout({children}){
    return(
        <div>
        <MobileDiscount/>
          {children}
        </div>
    )
}

