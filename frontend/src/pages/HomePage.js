import React, { useState, useEffect } from 'react';
import axios from 'axios';

//==IMPORT COMPONENTS
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

const HomePage = () => {

    // STATE of the HomePage
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    // AJAX request to backend
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get('/api/products');
                setLoading(false);
                setProducts(data);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }

        };
        fetchData();
    }, []);

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