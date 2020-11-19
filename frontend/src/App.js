import React from 'react';
import { Route } from 'react-router-dom';


// == IMPORT PAGES
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">E-panderie</a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
        <Route path="/" component={HomePage} exact></Route>
        <Route path="/product/:id" component={ProductPage}></Route>
      </main>
      <footer className="row center">
        All right reserved
    </footer>
    </div>
  );
}

export default App;
