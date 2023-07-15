import { useEffect, useState } from "react";
import useApi from "../hooks/useApi";

const ProductBlok = (props) => {
  const [price, setPrice] = useState("");
  const api = useApi();

  useEffect(() => {
    (async () => {
      const variantCode = props.product.defaultVariant.split("/").reverse()[0];
      const ProductDetailResponse = await api.get(
        "shop/product-variants/" + variantCode
      );

      console.log("ProductDetailResponce >>>", ProductDetailResponse.data);
      setPrice(ProductDetailResponse?.data?.price);
    })();
  }, []);

  return (
    <div
      key={props.product.id}
      className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb30"
    >
      <div className="product-block">
        <div className="product-img">
          <img
            src={`${import.meta.env.VITE_BASE_URL}${
              props.product.images[0].path
            }`}
            alt=""
          />
        </div>
        <div className="product-content">
          <h5>
            <a href="#" className="product-title">
              {props.product.name}
              <strong>(128GB, Black)</strong>
            </a>
          </h5>
          <div className="product-meta">
            <a href="#" className="product-price">
              ${price}
            </a>
            <a href="#" className="discounted-price">
              $1400
            </a>
            <span className="offer-price">20%off</span>
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

export default ProductBlok;
