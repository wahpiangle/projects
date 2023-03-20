import Products from "../Product/Products";
import './Shop.css';
import { useEffect, useState } from "react";
import { commerce } from "../../lib/commerce";

export default function Shop() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState({});

    const fetchProducts = async () => {
        const response = await commerce.products.list();
        setProducts(response.data);
        setLoading(false);
    }

    const fetchCart = async () => {
        const response = await commerce.cart.retrieve();
        console.log(response);
        setCart(response);
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, [])

    return (
        <div className="shop-container">
            <div className="products-container">
                {loading && <div className="banter-loader">
                    <div className="banter-loader__box"></div>
                    <div className="banter-loader__box"></div>
                    <div className="banter-loader__box"></div>
                    <div className="banter-loader__box"></div>
                    <div className="banter-loader__box"></div>
                    <div className="banter-loader__box"></div>
                    <div className="banter-loader__box"></div>
                    <div className="banter-loader__box"></div>
                    <div className="banter-loader__box"></div>
                </div>}
                <Products products={products} />
            </div>
        </div>
    )
}