import { useEffect, useState } from "react";
import useApi from "../hooks/useApi";
import { Link } from "react-router-dom";

const ProductBlok = (props) => {
  const [productDetail, setProductDetail] = useState(null);
  const api = useApi();

  useEffect(() => {
    (async () => {
      const variantCode = props.product.defaultVariant.split("/").reverse()[0];
      const ProductDetailResponse = await api.get(
        "shop/product-variants/" + variantCode
      );
      setProductDetail(ProductDetailResponse?.data);
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
            </a>
          </h5>
          <div className="product-meta">
            <a href="#" className="product-price">
              ${productDetail?.price}
            </a>
            <a href="#" className="discounted-price">
              ${productDetail?.originalPrice}
            </a>
          </div>
          <div className="shopping-btn">
            <Link
              to={`/product/${props.product.code}`}
              className="product-btn btn-like"
            >
              <i className="fa fa-arrow-right"></i>
            </Link>
            {/* <a href="#" className="product-btn btn-cart">
              <i className="fa fa-shopping-cart"></i>
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBlok;
