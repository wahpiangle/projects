import { useOutletContext, useParams } from "react-router-dom"
import './Individual.css'
import { useState } from "react"
import MyCarousel from "../Carousel/MyCarousel";

export default function Individual() {
    const products = useOutletContext();
    const [quantity, setQuantity] = useState(1);
    let { id } = useParams();
    const product = products[id - 1];

    function handleQuantity(e) {
        setQuantity(e.target.value);
    }
    function incrementQuantity() {
        setQuantity((parseInt(quantity) ? parseInt(quantity) + 1 : 1));
    }
    function decrementQuantity() {
        setQuantity(parseInt(quantity) > 0 ? parseInt(quantity) - 1 : 0);
    }

    return (
        <div className="individual-container">
            <h1 className="individual-title">{product.name}</h1>
            <div className="individual-product-container">
                <div className="individual-product_image">
                    <MyCarousel images={product.image}/>
                </div>
                <div className="individual-product_details">
                    <p className="individual-product_description">{product.desc}</p>
                    <div className="individual-purchase">
                        <div className="individual-product_quantity">
                            <div className="quantity-button" onClick={() => decrementQuantity()}>-</div>
                            <input type="text" value={quantity} onChange={handleQuantity} pattern="[0-9]{3}" min={0} />
                            <div className="quantity-button" onClick={() => incrementQuantity()} >+</div>
                        </div>
                        <div className="individual-addtocart">Add to Cart</div>
                    </div>
                </div>


            </div>
        </div>
    )
}