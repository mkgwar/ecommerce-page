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
  bin,
} from "./ImageData";
import { useState } from "react";

const images = { img1: "active", img2: "", img3: "", img4: "" };

function App() {
  const [imageSRC, setimageSRC] = useState(img1);
  const [activeImage, setactiveImage] = useState(images);
  const [counter, setcounter] = useState(1);
  const [isCartActive, setisCartActive] = useState(false);
  const [displayProduct, setdisplayProduct] = useState(false);
  const [currentCounter, setcurrentCounter] = useState(counter);

  const setImage = (imageURL, image) => {
    setimageSRC(imageURL);
    const temp = {};

    for (let key in images) {
      if (key === image) {
        temp[key] = "active";
      } else temp[key] = "";
    }

    setactiveImage(temp);
  };

  const minusCount = () => {
    setcounter(counter <= 1 ? 1 : counter - 1);
  };
  const plusCount = () => {
    setcounter(counter + 1);
  };

  const activateCart = () => {
    setisCartActive(!isCartActive);
  };

  const AddToCart = () => {
    setcurrentCounter(counter);
    setdisplayProduct(true);
  };

  const RemoveFromCart = () => {
    setdisplayProduct(false);
  };

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
          <img src={cart} alt="cart" onClick={activateCart} />
          <img src={avatar} alt="avatar" className="nav__avatar" />
          {isCartActive && displayProduct && (
            <div className="nav__cartDropDown">
              <div className="nav__cartTitle">Cart</div>
              <div className="nav__cartFlex">
                <img src={img1Thumb} alt="product" className="nav__thumb" />
                <div className="nav__cartDetail">
                  Fall Limited Edition Sneakers
                  <div>
                    $125.00 x {currentCounter} <b>${125 * currentCounter}.00</b>
                  </div>
                </div>
                <img src={bin} alt="delete" onClick={RemoveFromCart} />
              </div>
              <div className="nav__buttonContainer">
                <button className="nav__cartCheckout">Checkout</button>
              </div>
            </div>
          )}

          {isCartActive && !displayProduct && (
            <div className="nav__cartDropDown">
              <div className="nav__cartTitle">Cart</div>
              <div className="nav__nothing">Cart is empty</div>
            </div>
          )}
        </div>
      </nav>

      <main className="main">
        <div className="main__slider">
          <div className="main__imageContainer">
            <img
              src={imageSRC}
              alt="slider"
              className="main__sliderMainiImage"
            />
          </div>

          <div className="main__sliderFlex">
            <img
              src={img1Thumb}
              alt="slider"
              onClick={() => setImage(img1, "img1")}
              className={activeImage.img1}
            />
            <img
              src={img2Thumb}
              alt="slider"
              onClick={() => setImage(img2, "img2")}
              className={activeImage.img2}
            />
            <img
              src={img3Thumb}
              alt="slider"
              onClick={() => setImage(img3, "img3")}
              className={activeImage.img3}
            />
            <img
              src={img4Thumb}
              alt="slider"
              onClick={() => setImage(img4, "img4")}
              className={activeImage.img4}
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
              <img src={minus} alt="minus" onClick={minusCount} />{" "}
              <div className="main__counter">{counter}</div>
              <img src={plus} alt="plus" onClick={plusCount} />
            </div>
            <button className="main__cartButton" onClick={AddToCart}>
              <img src={cart} alt="cart" />
              Add To Cart
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
