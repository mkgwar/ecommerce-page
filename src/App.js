import "./App.scss";
import logo from "./images/logo.svg";
import cart from "./images/icon-cart.svg";
import avatar from "./images/image-avatar.png";

function App() {
  return (
    <div className="app">
      <nav className="nav">
        <div className="nav__left">
          <img src={logo} alt="logo" />
          <div className="nav__links">
            <a href="https://www.google.com">Collections</a>
            <a href="https://www.google.com">Men</a>
            <a href="https://www.google.com">Women</a>
            <a href="https://www.google.com">About</a>
            <a href="https://www.google.com">Contact</a>
          </div>
        </div>
        <div className="nav__right">
          <img src={cart} alt="cart" />
          <img src={avatar} alt="avatar" className="nav__avatar" />
        </div>
      </nav>
      {/* Sneaker Company Fall Limited Edition Sneakers These low-profile sneakers
      are your perfect casual wear companion. Featuring a durable rubber outer
      sole, they’ll withstand everything the weather can offer. $125.00 50%
      $250.00 0 Add to cart */}
    </div>
  );
}

export default App;
