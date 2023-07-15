import { useParams } from "react-router-dom";
import useApi from "../hooks/useApi";
import { useEffect, useState } from "react";
import ProductBlok from "../components/ProductBlok";

const ProductListPage = () => {
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [products, setProducts] = useState([]);
  const api = useApi();
  const params = useParams();

  useEffect(() => {
    (async () => {
      const productsResponse = await api.get(`shop/products`, {
        params: {
          "order[createdAt]": "asc",
          "order[price]": "asc",
          "productTaxons.taxon.code": params.code,
          page,
          itemsPerPage,
        },
      });
      setProducts(productsResponse.data);
    })();
  }, []);

  return (
    <>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
              <div id="cssmenu">
                <ul>
                  <li className="has-sub active">
                    <a href="#">CATEGORY</a>
                    <ul style={{ display: "block" }}>
                      <li>
                        <a href="#">Smart Phones</a>
                      </li>
                      <li>
                        <a href="#">Cell Phones</a>
                      </li>
                      <li className="last">
                        <a href="#">Android Phones</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-8 col-xs-12">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb10 alignright">
                  <form>
                    <div className="select-option form-group">
                      <select name="select" className="form-control">
                        <option value="">Select</option>
                        <option value="">Best Match</option>
                        <option value="">Low Price</option>
                        <option value="">High Price</option>
                      </select>
                    </div>
                  </form>
                </div>
              </div>
              <div className="row">
                {products.map((product) => (
                  <ProductBlok key={product.id} product={product} />
                ))}

                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb30">
                  <div className="product-block">
                    <div className="product-img">
                      <img src="images/product_img_3.png" alt="" />
                    </div>
                    <div className="product-content">
                      <h5>
                        <a href="#" className="product-title">
                          Samsung Galaxy Note 8
                        </a>
                      </h5>
                      <div className="product-meta">
                        <a href="#" className="product-price">
                          $1500
                        </a>
                        <a href="#" className="discounted-price">
                          $2000
                        </a>
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

                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb30">
                  <div className="product-block">
                    <div className="product-img">
                      <img src="images/product_img_4.png" alt="" />
                    </div>
                    <div className="product-content">
                      <h5>
                        <a href="#" className="product-title">
                          Vivo V5 Plus <strong>(Matte Black)</strong>
                        </a>
                      </h5>
                      <div className="product-meta">
                        <a href="#" className="product-price">
                          $1500
                        </a>
                        <a href="#" className="discounted-price">
                          $2000
                        </a>
                        <span className="offer-price">15%off</span>
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

                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb30">
                  <div className="product-block">
                    <div className="product-img">
                      <img src="images/product_img_2.png" alt="" />
                    </div>
                    <div className="product-content">
                      <h5>
                        <a href="#" className="product-title">
                          HTC U Ultra <strong>(64GB, Blue)</strong>
                        </a>
                      </h5>
                      <div className="product-meta">
                        <a href="#" className="product-price">
                          $1200
                        </a>
                        <a href="#" className="discounted-price">
                          $1700
                        </a>
                        <span className="offer-price">10%off</span>
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

                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb30">
                  <div className="product-block">
                    <div className="product-img">
                      <img src="images/product_img_2.png" alt="" />
                    </div>
                    <div className="product-content">
                      <h5>
                        <a href="#" className="product-title">
                          HTC U Ultra <strong>(64GB, Blue)</strong>
                        </a>
                      </h5>
                      <div className="product-meta">
                        <a href="#" className="product-price">
                          $1200
                        </a>
                        <a href="#" className="discounted-price">
                          $1700
                        </a>
                        <span className="offer-price">10%off</span>
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

                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb30">
                  <div className="product-block">
                    <div className="product-img">
                      <img src="images/product_img_3.png" alt="" />
                    </div>
                    <div className="product-content">
                      <h5>
                        <a href="#" className="product-title">
                          Samsung Galaxy Note 8
                        </a>
                      </h5>
                      <div className="product-meta">
                        <a href="#" className="product-price">
                          $1500
                        </a>
                        <a href="#" className="discounted-price">
                          $2000
                        </a>
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

                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb30">
                  <div className="product-block">
                    <div className="product-img">
                      <img src="images/product_img_2.png" alt="" />
                    </div>
                    <div className="product-content">
                      <h5>
                        <a href="#" className="product-title">
                          HTC U Ultra <strong>(64GB, Blue)</strong>
                        </a>
                      </h5>
                      <div className="product-meta">
                        <a href="#" className="product-price">
                          $1200
                        </a>
                        <a href="#" className="discounted-price">
                          $1700
                        </a>
                        <span className="offer-price">10%off</span>
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
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="st-pagination">
                    <ul className="pagination">
                      <li>
                        <a href="#" aria-label="previous">
                          <span aria-hidden="true">Previous</span>
                        </a>{" "}
                      </li>
                      <li className="active">
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        {" "}
                        <a href="#" aria-label="Next">
                          <span aria-hidden="true">Next</span>
                        </a>{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductListPage;
