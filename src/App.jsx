import { useEffect } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import MainPage from "./pages/MainPage";
import useApi from "./hooks/useApi";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
[
  {
    id: 2,
    code: "t_shirts",
    children: [
      "/api/v2/shop/taxons/mens_t_shirts",
      "/api/v2/shop/taxons/womens_t_shirts",
    ],
    name: "T-shirts",
    slug: "category/t-shirts",
    description:
      "Dolores pariatur quo provident eos vel dolores autem. Pariatur et eveniet cupiditate amet sunt culpa et. Architecto ab velit corrupti sed ut non quisquam. Cum rerum ut ad quo ullam occaecati hic.",
  },
  {
    id: 5,
    code: "caps",
    children: [
      "/api/v2/shop/taxons/simple_caps",
      "/api/v2/shop/taxons/caps_with_pompons",
    ],
    name: "Caps",
    slug: "category/caps",
    description:
      "Provident soluta sapiente beatae officia. Sunt maiores et esse. Repudiandae pariatur ut dolorem qui est sequi. Rerum ratione alias sed delectus sequi.",
  },
  {
    id: 8,
    code: "dresses",
    children: [],
    name: "Dresses",
    slug: "category/dresses",
    description:
      "Doloremque ducimus modi odit est. Dolores quia voluptas voluptas rerum reprehenderit voluptatem ut commodi. Qui eius aut amet et. Molestiae aut consequatur totam beatae ratione.",
  },
  {
    id: 9,
    code: "jeans",
    children: [
      "/api/v2/shop/taxons/mens_jeans",
      "/api/v2/shop/taxons/womens_jeans",
    ],
    name: "Jeans",
    slug: "category/jeans",
    description:
      "Nostrum quam natus animi et deleniti facere et. Est praesentium et sequi fuga sit architecto. Recusandae expedita culpa non voluptatem cumque repellendus laudantium. Doloribus ab eum numquam consequatur. Qui quo consectetur occaecati aut dolorem et et.",
  },
];
