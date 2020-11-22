import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// == IMPORT ACTIONS
import { listProducts } from '../actions/productActions';

//==IMPORT COMPONENTS
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';


const HomePage = () => {

    // Get STATE from the STORE
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;
    const dispatch = useDispatch();

    // DISPATCH action creator for AJAX request to fetch the data
    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    return (
        <div>
            {
                loading ? (
                    <LoadingBox />
                ) : error ? (
                    <MessageBox variant="danger">{error}</MessageBox>
                ) : (
                            <div className="row center">
                                {
                                    products.map((product) => {
                                        return (
                                            <Product key={product._id} product={product} />
                                        )
                                    })
                                }
                            </div>
                        )}
        </div>
    )
};

export default HomePage;