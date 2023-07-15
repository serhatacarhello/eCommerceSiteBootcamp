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
  }, [api]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/auth">
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>
          <Route path="/*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
