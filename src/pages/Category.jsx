import { useEffect,useState } from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import axios from "axios";
import { useParams } from "react-router-dom";

const category = () => {
    
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/category/${categoryId}`)
        .then((res) => setProducts(res.data.products))
        .catch((error) => console.log(error))
    }, [categoryId])

    return <ItemListContainer products={products}/>
}

export default category
