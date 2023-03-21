import { useOutletContext, useParams } from "react-router-dom"
import './Individual.css'
export default function Individual(){
    const products = useOutletContext();
    let { id } = useParams();
    const product = products[id-1];
    return(
        <div className="individual-container">
            <h1 className="individual-title">{product.name}</h1>
            <div className="individual-product-container">
                <div className="individual-product_image">
                    <img src={product.image[0].url}/>
                </div>
                <div className="individual-product_details">
                    <p className="individual-product_description">{product.desc}</p>
                </div>
            </div>
        </div>
    )
}