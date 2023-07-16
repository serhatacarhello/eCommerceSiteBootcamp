import React, { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { combineBaseUrl } from "../../../utils";
import useApi from "../../../hooks/useApi";
import { useDispatch, useSelector } from "react-redux";
import { SET_CART } from "../../../redux/reducers/cartReducer";

const ProductBasicInfo = ({ product, variants }) => {
  console.log("product", product);
  console.log("variants", variants);
  //state for variant index
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const api = useApi();
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartState);

  const handleAddButtonClick = () => {
    //add product to basket

    (async () => {
      const cartResponse = await api.post(
        `shop/orders/${cartState.cart?.tokenValue}/items`,
        {
          productVariant: variants[selectedVariantIndex].code,
          quantity,
        }
      );
      console.log("cartResponse", cartResponse);
      dispatch({
        type: SET_CART,
        payload: cartResponse.data,
      });
    })();

    // inc product count
    // dec product store
    console.log("button clicked Add button<<<<<<<<<<<<<<<<>>>>>>>>>>>>");
  };
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
                      ${variants[selectedVariantIndex].price}
                      &nbsp;
                      <strike>
                        ${variants[selectedVariantIndex].originalPrice}
                      </strike>
                    </p>
                    <p>{product.shortDescription}</p>
                    <div
                      className="product-quantity"
                      style={{ padding: "0 20px 0  20px" }}
                    >
                      <div className="row ">
                        {/* variants */}
                        <div className="col-md-4">
                          <h5>Quantity</h5>

                          <div
                            className="quantity mb20 "
                            style={{ width: "100%-!important" }}
                          >
                            <input
                              onChange={(e) =>
                                setQuantity(parseInt(e.target.value))
                              }
                              type="number"
                              className="input-text qty text"
                              step="1"
                              min="1"
                              max="10"
                              name="quantity"
                              value={quantity}
                              title="Qty"
                              size="4"
                              pattern="[0-9]*"
                            />
                          </div>
                        </div>
                        {variants.length > 1 && (
                          <div className="col-md-4">
                            <h5>Variants</h5>

                            <div className="quantity mb20">
                              <select
                                className="input-text qty text"
                                onChange={(e) => {
                                  setSelectedVariantIndex(
                                    parseInt(e.target.value)
                                  );
                                }}
                              >
                                {/* for different sizes */}
                                {variants.map((variant, index) => {
                                  return (
                                    <option key={index} value={index}>
                                      {variant.name}
                                    </option>
                                  );
                                })}
                              </select>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-default"
                      onClick={handleAddButtonClick}
                    >
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
