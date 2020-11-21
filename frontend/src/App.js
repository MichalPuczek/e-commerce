import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';


// == IMPORT PAGES
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';

function App() {

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

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
          <Link to="/signin">Sign In</Link>
        </div>
      </header>
      <main>
        <Route path="/" component={HomePage} exact></Route>
        <Route path="/product/:id" component={ProductPage}></Route>
        <Route path="/cart/:id?" component={CartPage}></Route>
      </main>
      <footer className="row center">
        All right reserved
    </footer>
    </div>
  );
}

export default App;
