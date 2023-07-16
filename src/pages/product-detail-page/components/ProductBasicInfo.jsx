import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { combineBaseUrl } from "../../../utils";

const ProductBasicInfo = ({ product, variants }) => {
  console.log("product", product);
  console.log("variants", variants);
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="box">
            {/* product-description */}
            <div className="box-body">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <Splide aria-label="Product Images">
                    {product.images.map((image, index) => (
                      <SplideSlide key={index}>
                        <img src={combineBaseUrl(image.path)} alt="" />
                      </SplideSlide>
                    ))}
                  </Splide>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <div className="product-single">
                    <h2>{product.name} </h2>
                    <div className="product-rating">
                      <span>
                        <i className="fa fa-star"></i>
                      </span>
                      <span>
                        <i className="fa fa-star"></i>
                      </span>
                      <span>
                        <i className="fa fa-star"></i>
                      </span>
                      <span>
                        <i className="fa fa-star"></i>
                      </span>
                      <span>
                        <i className="fa fa-star-o"></i>
                      </span>
                      <span className="text-secondary">
                        &nbsp;(4.8 Review Stars)
                      </span>
                    </div>
                    <p className="product-price" style={{ fontSize: "38px" }}>
                      $1100 <strike>$1300</strike>
                    </p>
                    <p>{product.shortDescription}</p>
                    <div className="product-quantity">
                      <h5>Quantity</h5>
                      <div className="quantity mb20">
                        <input
                          type="number"
                          className="input-text qty text"
                          step="1"
                          min="1"
                          max="6"
                          name="quantity"
                          value="1"
                          title="Qty"
                          size="4"
                          pattern="[0-9]*"
                        />
                      </div>
                    </div>
                    <button type="submit" className="btn btn-default">
                      <i className="fa fa-shopping-cart"></i>&nbsp;Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBasicInfo;
