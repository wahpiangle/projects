import './Product.css'
import { MdAddShoppingCart } from 'react-icons/md';

export default function Product({product}){
    return (
        <div className="product-card">
            <div className='product-card-container'>
                <img src={product.image.url}/>
                <div className='product-name' dangerouslySetInnerHTML={{__html: product.name}}/>
                <div className='product-price'>{product.price.formatted_with_symbol}</div>
            </div>
            <div className='product-addcart-container'>
                <MdAddShoppingCart className='product-addcart'/>
            </div>
        </div>
    )
}