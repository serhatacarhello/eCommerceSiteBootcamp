import { useEffect } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import MainPage from "./pages/MainPage";
import useApi from "./hooks/useApi";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/auth/login";
import RegisterPage from "./pages/auth/register";
import Error404 from "./pages/error404";
import { useDispatch } from "react-redux";
import { SET_CATEGORIES } from "./redux/reducers/categoryReducer";
import AboutPage from "./pages/AboutPage";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailPage from "./pages/ProductDetailPage";

const App = () => {
  const api = useApi();
  const dispatch = useDispatch();
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
  }, [dispatch, api]);

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
          {/* error page */}
          <Route path="/*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
