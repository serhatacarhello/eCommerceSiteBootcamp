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
  }, [params.code]);
  console.log(products);
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
              </div>
              {/* pagination */}
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
