import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';
import { Link, useNavigate } from 'react-router-dom';


export const Product = (props) => {


    const { id, productName, price, productImage } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext)

    const cartItemAmount = cartItems[id]
    const navigate = useNavigate();

    const onProductClick = () => {

        navigate('../products/product-desc')
        // <Link to={`'../products/product-desc'`} />

    }



    return (
        <div className='product' onClick={onProductClick}>
            <img src={productImage} />

            <div className='description'>
                <p>
                    <b>{productName}</b>

                </p>
                <p>${price}</p>
            </div>

            <button className='addToCartBttn' onClick={() => addToCart(id)}>Add To Cart{cartItemAmount > 0 && <> ({cartItemAmount})</>}</button>
        </div>
    )
}
