import { Link } from "react-router-dom";

const PRODUCTS= [
    {id: 'p1', title: 'product 1'},
    {id: 'p2', title: 'product 2'},
    {id: 'p3', title: 'product 3'},
]

function Product () {
    return (
        <>
        <h1>This is product page!</h1>
        {PRODUCTS.map((prod)=>(
            <li><Link to={`/products/${prod.id}`} >{prod.title}</Link></li>
        ))}
        </>
    );
};



export default Product;