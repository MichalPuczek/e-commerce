import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

// == IMPORT Actions
import { detailsProduct } from '../actions/productActions';

// == IMPORT COMPONENTS
import Rating from "../components/Rating";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

// == IMPORT REACT ROUTER
import { Link } from "react-router-dom";

const ProductPage = (props) => {

  // Get the STATE from the STORE
  const productDetails = useSelector(state => state.productDetails);
  const { loading, error, product } = productDetails;

  // Dispatch
  const dispatch = useDispatch();
  const productId = props.match.params.id;

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  return (
    <div>
      {
        loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
              <div>
                <Link to="/">Back to results</Link>
                <div className="row top">
                  <div className="col-2">
                    <img className="large" src={product.image} alt={product.name} />
                  </div>
                  <div className="col-1">
                    <ul>
                      <li>
                        <h1>{product.name}</h1>
                      </li>
                      <li>
                        <Rating rating={product.rating} numReviews={product.numReviews} />
                      </li>
                      <li>Price : ${product.numReviews}</li>
                      <li>
                        Description :<p>{product.description}</p>
                      </li>
                    </ul>
                  </div>
                  <div className="col-1">
                    <div className="card card-body">
                      <ul>
                        <li>
                          <div className="row">
                            <div>Price</div>
                            <div className="price">${product.price}</div>
                          </div>
                        </li>
                        <li>
                          <div className="row">
                            <div>Status</div>
                            <div>
                              {product.countInStock > 0 ? (
                                <span className="success">In Stock</span>
                              ) : (
                                  <span className="danger">Unavailable</span>
                                )}
                            </div>
                          </div>
                        </li>
                        <li>
                          <button className="primary block">Add to cart</button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
    </div>
  );
};

export default ProductPage;
