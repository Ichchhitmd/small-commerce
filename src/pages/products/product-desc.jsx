import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'
import { productItem } from './productItem'
import { ShopContext } from '../../context/shop-context'

export const productDesc = () => {
    return (
        <div className='productDescription'>
            <div>
                <h1>
                    Welcome to product desc
                </h1>
            </div>


        </div>
    )
}
