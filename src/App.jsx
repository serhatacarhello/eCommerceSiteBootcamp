import { useEffect } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import MainPage from "./pages/MainPage";
import useApi from "./hooks/useApi";
import { BrowserRouter, Routes, Route, json } from "react-router-dom";
import LoginPage from "./pages/auth/login";
import RegisterPage from "./pages/auth/register";
import Error404 from "./pages/error404";
import { useDispatch, useSelector } from "react-redux";
import { SET_CATEGORIES } from "./redux/reducers/categoryReducer";
import AboutPage from "./pages/AboutPage";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailPage from "./pages/product-detail-page";
import { SET_CART } from "./redux/reducers/cartReducer";
import CartPage from "./pages/cart-page/cartPage";

const App = () => {
  const api = useApi();
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartState);
  // console.log("🚀 ~ file: App.jsx:20 ~ App ~  cartState:", cartState);

  useEffect(() => {
    //immediate call func
    (async () => {
      const result = await api.get("shop/taxons", {
        params: {
          page: 1,
          itemsPerPage: 30,
        },
      });
      dispatch({
        type: SET_CATEGORIES,
        payload: result.data,
      });
    })();
  }, []);
  // delete işleminden sonra state teki değişiklikleri tekrar alabilmek için ayrı async fun yazdık
  (async () => {
    /*
      Durumlar şunlar:
      - LS da hic token yoksa olustur yada al
      - lS da var ama Redux ta null ise mevcut tokeni kullanarak cart bilgisini al
      */
    const localStorageCartToken = localStorage.getItem("cartToken");

    if (localStorageCartToken === null) {
      // create cartToken send a {}
      const cartResponse = await api.post(`shop/orders`, {});
      // save cartToken to LS
      localStorage.setItem("cartToken", cartResponse.data.tokenValue);
      // send data to redux store
      dispatch({
        type: SET_CART,
        payload: cartResponse.data,
      });

      // bu kısmın calışması için cartReducer içinde REMOVE_CART action type ta cart i null a çektik
    } else if (localStorageCartToken && cartState.cart === null) {
      //
      const cartResponse = await api.get(
        `shop/orders/${localStorageCartToken}`
      );
      dispatch({
        type: SET_CART,
        payload: cartResponse.data,
      });
    }
  })();

  // console.log("cartState<<<<<<<<<<<<<<<<<<<<<<<", cartState);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* auth */}
          <Route path="/auth">
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>
          {/* product page */}
          <Route path="/category/:code" element={<ProductListPage />} />
          <Route path="/product/:code" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />

          {/* error page */}
          <Route path="/*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
