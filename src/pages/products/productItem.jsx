import React, { useContext } from 'react'
// import { ShopContext } from '../../context/shop-context'

export const productItem = (props) => {
    const { id, productName, price, productImage } = props.data;
    // const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);


    return (
        <div className='productItem'>
            <img src={productImage} />

            <div className='productDescription'>
                <p>
                    <b>
                        {productName}
                    </b>
                    <br />

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam delectus consectetur laudantium dolorum voluptatibus quas tempore reiciendis atque, ut accusamus?
                </p>
                <p>${price}</p>

            </div>




        </div>
    )
}
