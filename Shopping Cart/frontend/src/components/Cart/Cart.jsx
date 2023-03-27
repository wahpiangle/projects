import './Cart.css';
import { useSelector, useDispatch } from 'react-redux';
import { RxCross1 } from 'react-icons/rx';
import { incrementItem, decrementItem, clearItem } from '../../redux/cartSlice';

export default function Cart(){
    const cart = useSelector(state => state.cart.value);
    const dispatch = useDispatch();

    console.log(cart)
    function handleIncrementItem(id){
        dispatch(incrementItem(id));
    }

    function handleDecrementItem(id){
        dispatch(decrementItem(id));
    }

    function handleClearItem(id){
        dispatch(clearItem(id));
    }

    return(
        <div className="cart">
            <div className="cart-title">Cart</div>
            <div className='cart-container'>
                <div className='cart-items'>
                    {cart.itemsInCart.map(item => (
                        <div className='cart-item' key={item.id}>
                            <div className='cart-item-image'>
                                <img src={item.image[0].url}/>
                            </div>
                            <div className='cart-item-details'>
                                <div className='cart-item-details-name'>{item.name}</div>
                                <div className='cart-item-details-price'>${item.price}</div>
                            </div>
                            <div className='cart-item-quantity'>
                                <div className='cart-item-quantity-minus' onClick={() => handleDecrementItem(item.id)}>-</div>
                                    {item.quantity}
                                <div className='cart-item-quantity-plus' onClick={() => handleIncrementItem(item.id)}>+</div>
                            </div>
                            <RxCross1 className='cart-clear-item' onClick={()=> handleClearItem(item.id)}></RxCross1>
                        </div>
                    ))}
                </div>
                <div className='cart-total'>
                    <div className='cart-total-title'>Cart total</div>
                    <div className='cart-total-items-container'>
                        <div className='cart-total-subtitle'>Subtotal</div>
                        <div className='cart-total-subtotal'>${cart.totalPrice}</div>
                        <div className='cart-total-subtitle'>Shipping</div>
                        <div className='cart-total-shipping'>No Shipping Options are available</div>
                    </div>
                    <div className='cart-total-checkout'>Proceed to Checkout</div>
                </div>
            </div>
        </div>
    )
}