import { useParams } from 'react-router-dom';

const ProductDetail= ()=> {
    const params= useParams();

    return(
        <>
            <h1>This is product detail!!</h1>
            <p>{params.productId}</p>
        </>
    );
};


export default ProductDetail;