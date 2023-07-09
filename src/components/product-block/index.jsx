import React from "react";

const ProductBlock = ({ props }) => {
  return (
    <div>
      <div className="product-block">
        <div className="product-img">
          <img src={props.image} alt="" />
        </div>
        <div className="product-content">
          <h5>
            <a href="#" className="product-title">
              <strong>{props.title}</strong>
            </a>
          </h5>
          <div className="product-meta">
            <a href="#" className="product-price">
              {props.price}
            </a>
            {props.discountedPrice ? (
              <a href="#" className="discounted-price">
                <strike>{props.discountedPrice}</strike>
              </a>
            ) : null}
            <span className="offer-price">40%off</span>
          </div>
          <div className="shopping-btn">
            <a href="#" className="product-btn btn-like">
              <i className="fa fa-heart"></i>
            </a>
            <a href="#" className="product-btn btn-cart">
              <i className="fa fa-shopping-cart"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBlock;
