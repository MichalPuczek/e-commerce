import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';


// == IMPORT PAGES
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import SigninPage from './pages/SigninPage';
import RegisterPage from './pages/RegisterPage';

// == IMPORT ACTIONS
import { signout } from './actions/userActions';

function App() {

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();

  const signoutHandler = () => {
    dispatch(signout());
  }

  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <Link className="brand" to="/">E-panderie</Link>
        </div>
        <div>
          <Link to="/cart">Cart
          {cartItems.length > 0 && (
              <span className="badge">
                {cartItems.length}
              </span>
            )}
          </Link>
          {
            userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <Link
                    to="#signout"
                    onClick={signoutHandler}>
                    Sign Out
                  </Link>
                </ul>
              </div>
            ) :
              (
                <Link to="/signin">Sign In</Link>
              )
          }
        </div>
      </header>
      <main>
        <Route path="/" component={HomePage} exact></Route>
        <Route path="/product/:id" component={ProductPage}></Route>
        <Route path="/signin" component={SigninPage}></Route>
        <Route path="/register" component={RegisterPage}></Route>
        <Route path="/cart/:id?" component={CartPage}></Route>
      </main>
      <footer className="row center">
        All right reserved
    </footer>
    </div>
  );
}

export default App;
