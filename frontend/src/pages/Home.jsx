import { useState, useEffect } from "react";
import api from "../api";

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {getProducts();}, []);

    const getProducts = () => {
        api
            .get("api/products/")
            .then((res) => res.data)
            .then((data) => setProducts(data))
            .catch((err) => alert(err));
    };

    return <>
        <h1>Home</h1>
        {products.map((product) => <h1>{product.name}</h1>)}
    </>
}

export default Home