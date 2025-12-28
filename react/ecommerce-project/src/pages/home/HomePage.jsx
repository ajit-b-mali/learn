import Header from "../../components/Header"
import "./HomePage.css"
import ProductGrid from "./ProductsGrid"
import { useEffect, useState } from "react"
import fetchData from "../../utils/fetchData"

export default function HomePage({ cart=[], loadCart }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchData(setProducts, "/api/products");
    }, []);

    return (
        <>
            <title>Ecommerce Project</title>
            <Header cart={cart} />
            <div className="home-page">
                <ProductGrid products={products} loadCart={loadCart} />
            </div>
        </>
    );
}