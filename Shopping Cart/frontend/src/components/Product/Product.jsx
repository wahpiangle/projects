import './Product.css'
import { MdAddShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function Product({product}){
    return (
        <div className="product-card">
            <Link to={`/shop/${product.id}`} state={product.id}>
                <div className='product-card-container'>
                    <img src={product.image[0].url}/>
                    <div className='product-name' >{product.name}</div>
                    <div className='product-price'>$ {product.price}</div>
                </div>
            </Link>
            <div className='product-addcart-container'>
                <MdAddShoppingCart className='product-addcart'/>
            </div>
        </div>
    )
}