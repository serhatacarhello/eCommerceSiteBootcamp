import { useDispatch, useSelector } from "react-redux";
import useApi from "../../hooks/useApi";
import { REMOVE_CART, SET_CART } from "../../redux/reducers/cartReducer";

const CartPage = () => {
  const api = useApi();
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartState);
  console.log("🚀 ~ file: cartPage.jsx:6 ~ CartPage ~ cartState:", cartState);

  const handleInputValueChange = (e, item) => {
    //update product cart
    // fiyatı miktar artınce güncelleme için fonksiyon yaz
    // /api/v2/shop/orders/{tokenValue}/items/{orderItemId} api url
    // request body
    //{
    //   "quantity": 0
    // }
    //! a problem occured here !!!!! try to solve problem

    const quantity = parseInt(e.target.value);
    console.log(
      "🚀 ~ file: cartPage.jsx:22 ~ handleInputValueChange ~ quantity:",
      quantity
    );
    //! a problem occured here !!!!! try to solve problem
    console.log(
      "item.id",
      item.id
    )(async () => {
      const cartResponse = await api.patch(
        `shop/orders/${cartState.cart?.tokenValue}/items/${item.id}`,
        {
          headers: {
            ["Content-Type"]: "application/merge-patch+json",
          },
        },
        {
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
    console.log(
      "button clicked ınput value button<<<<<<<<<<<<<<<<>>>>>>>>>>>>"
    );
  };
  return (
    <>
      <div className="space-medium">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
              <div className="box">
                <div className="box-head">
                  <h3 className="head-title">My Cart (02)</h3>
                </div>
                {/* <!-- cart-table-section --> */}
                <div className="box-body">
                  <div className="table-responsive">
                    <div className="cart">
                      <table className="table table-bordered ">
                        <thead>
                          <tr>
                            <th>
                              <span>Item</span>
                            </th>
                            <th>
                              <span>Price</span>
                            </th>
                            <th>
                              <span>Quantity</span>
                            </th>
                            <th>
                              <span>Total</span>
                            </th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {cartState.cart?.items?.map((item, index) => (
                            <tr key={item.id}>
                              <td>
                                <a href="#">
                                  <img src="images/cart_product_1.png" alt="" />
                                </a>
                                <span>
                                  <a href="#">{item.productName}</a>
                                </span>
                              </td>
                              <td>${item.unitPrice}</td>
                              <td>
                                <div className="product-quantity">
                                  <div className="quantity">
                                    <input
                                      // fiyatı miktar artınce güncelleme için fonksiyon yaz
                                      // /api/v2/shop/orders/{tokenValue}/items/{orderItemId} api url
                                      // request body
                                      //{
                                      //   "quantity": 0
                                      // }
                                      onChange={(e) =>
                                        handleInputValueChange(e, item)
                                      }
                                      type="number"
                                      className="input-text qty text"
                                      step="1"
                                      min="1"
                                      max="10"
                                      name="quantity"
                                      defaultValue={item.quantity}
                                      title="Qty"
                                      size="4"
                                      pattern="[0-9]*"
                                    />
                                  </div>
                                </div>
                              </td>
                              <td>${item.total}</td>
                              <th scope="row">
                                <a
                                  href="#"
                                  onClick={async () => {
                                    if (
                                      confirm(
                                        "Silmek istediğinizden emin misiniz?"
                                      )
                                    ) {
                                      // api ye delete istegi yaptık item i siler
                                      await api.delete(
                                        `shop/orders/${cartState.cart?.tokenValue}/items/${item.id}`
                                      );
                                      store.dispatch({
                                        type: REMOVE_CART,
                                      });
                                    }
                                  }}
                                  className="btn-close"
                                >
                                  <i className="fa fa-times-circle-o"></i>
                                </a>
                              </th>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <a href="#" className="btn-link">
                <i className="fa fa-angle-left"></i> back to shopping
              </a>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className="box mb30">
                <div className="box-head">
                  <h3 className="head-title">Price Details</h3>
                </div>
                <div className="box-body">
                  <div className=" table-responsive">
                    <div className="pay-amount ">
                      <table className="table mb20">
                        <tbody>
                          <tr>
                            <th>
                              <span>Price (2 items)</span>
                            </th>
                            <td>
                              {cartState.cart?.currencyCode}&nbsp;
                              {cartState.cart?.itemsTotal}
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <span>Delivery Charges</span>
                            </th>
                            <td>
                              <strong className="text-green">
                                {cartState.cart?.currencyCode}&nbsp;
                                {cartState.cart?.shippingTotal}
                              </strong>
                            </td>
                          </tr>
                        </tbody>
                        <tbody>
                          <tr>
                            <th>
                              <span className="mb0" style={{ fontWeight: 700 }}>
                                Amount Payable
                              </span>
                            </th>
                            <td style={{ fontWeight: 700, color: "#1c1e1e" }}>
                              {cartState.cart?.currencyCode}&nbsp;
                              {cartState.cart?.total}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <button className="btn btn-primary btn-block">
                      Proceed To Checkout
                    </button>
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

export default CartPage;
