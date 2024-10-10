import React from "react";
import img1 from "../public/assests/image/1.jpg";
import cart from "../public/assests/image/5163709.jpg"
function Home() {
  return (
    <div>
      <div className="add-to-cart">
        <img src={cart} />
      </div>
      <h1>Amazon Services</h1>
      <div className="cart-wrapper">
          <div className="image-wrapper item">
            <img src={img1} />
          </div>
          <div className="text-wrapper item">
            <span>Samsung</span>&nbsp;
            <span>Price-100.00Rs</span>
          </div>
          <div className="btn-wrapper item">
            <button>Add to cart</button>
          </div>
      </div>
    </div>
  );
}
export default Home;
