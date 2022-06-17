import React, {useState} from 'react';
import './CartCat.css'
import Data from "../../data";

const CartCat = () => {

    const selectCart = (id,disabled) => {
        if (disabled){
            return 0
        }else {
            let elem = document.getElementsByClassName(`${'block' + id}`);
            for (let block of elem){
                if (block.classList.value.indexOf('checked') === -1){
                    block.classList.add('checked')
                }else {
                    block.classList.remove('checked')
                }
            }
        }
    }

    return (
        <div className={'cats-container'}>

            {Data.map(cart=>{
                return(
                    <div
                        key={cart.id}
                        className={'cart-container'}
                    >
                        <div
                            onClick={() => selectCart(cart.id,cart.disabled)}
                            className={`cart-cat ${cart.disabled?'disabled':''} ${'block'+cart.id}`}
                        >
                            <div className="content-cat">
                                <div className="text">
                                    <h5>Сказочное заморское яство</h5>
                                    <h1 className={cart.disabled?'disabled':''}>Нямушка</h1>
                                    <h3 className={cart.disabled?'disabled':''}>{cart.vkus}</h3>
                                    <p>{cart.porcii}</p>
                                    <p>{cart.podarok}</p>
                                    <p>{cart.zakaz}</p>
                                </div>
                                <div className={'img-container'} />
                            </div>

                            <div className={`ves-block ${cart.disabled?'disabled':''} ${'block'+cart.id}`}>
                                <h1>{cart.ves}</h1>
                                <h3>кг</h3>
                            </div>
                        </div>

                        <p className={`bottom-text ${cart.disabled?'disabled':''}`} onClick={() => selectCart(cart.id,cart.disabled)}>
                            {cart.disabled?cart.disabledBottomText:cart.bottomtext}
                        </p>
                    </div>
                )
            })}


        </div>
    );
};

export default CartCat;