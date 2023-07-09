import { useEffect } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import MainPage from "./pages/MainPage";
import useApi from "./hooks/useApi";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/auth/login";
import RegisterPage from "./pages/auth/register";
import Error404 from "./pages/error404";

const App = () => {
  const api = useApi();
  useEffect(() => {
    api
      .get("shop/taxons", {
        params: {
          page: 1,
          itemsPerPage: 30,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log("err", err));
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
