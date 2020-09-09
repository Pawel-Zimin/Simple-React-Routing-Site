import React from 'react';
import Product from '../components/Product';
import {Link} from 'react-router-dom';

const ProductsPage = props => {
    return (
        <React.Fragment>
            <Product id={props.match.params.id}/>
            <Link to='/products'>Back to products list</Link>
        </React.Fragment>
    );
}
 
export default ProductsPage;