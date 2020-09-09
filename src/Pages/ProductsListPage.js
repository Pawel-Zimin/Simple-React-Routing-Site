import React from 'react';
import {Link} from 'react-router-dom';

const products = ['car', 'bike', 'motorbike'];

const ProductsListPage = () => {
    
    const list = products.map(item => (
        <li key={item}>
            <Link to={`/products/${item}`}>{item}</Link>
        </li>
    ));
    
    return (
        <div className="products">
            <h2>Product List:</h2>
            <div>
                <ul>
                    {list}
                </ul>
            </div>
        </div>
    );
}
 
export default ProductsListPage;