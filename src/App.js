import "./App.scss";
import {
  logo,
  cart,
  avatar,
  img1Thumb,
  img1,
  img2Thumb,
  img2,
  img3Thumb,
  img3,
  img4Thumb,
  img4,
  minus,
  plus,
} from "./ImageData";
import { useState } from "react";

function App() {
  const [imageSRC, setimageSRC] = useState(img1);

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

      <main className="main">
        <div className="main__slider">
          <img src={imageSRC} alt="slider" className="main__sliderMainiImage" />
          <div className="main__sliderFlex">
            <img
              src={img1Thumb}
              alt="slider"
              onClick={() => setimageSRC(img1)}
            />
            <img
              src={img2Thumb}
              alt="slider"
              onClick={() => setimageSRC(img2)}
            />
            <img
              src={img3Thumb}
              alt="slider"
              onClick={() => setimageSRC(img3)}
            />
            <img
              src={img4Thumb}
              alt="slider"
              onClick={() => setimageSRC(img4)}
            />
          </div>
        </div>

        <div className="main__text-content">
          <div className="main__topText">Sneaker Company</div>
          <h1 className="main__title">Fall Limited Edition Sneakers</h1>
          <p className="main__paragraph">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className="main__priceFlex">
            <h2 className="main__price">$125.00</h2>
            <div className="main__discount">50%</div>
          </div>
          <p className="main__originalPrice">$250.00</p>
          <div className="main__addToCart">
            <div className="main__plusMinus">
              <img src={minus} alt="minus" /> 0
              <img src={plus} alt="plus" />
            </div>
            <button className="main__addToCart">
              <img src={cart} alt="cart" />
              <span>Add To Cart</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
