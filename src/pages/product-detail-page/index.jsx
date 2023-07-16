import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import ProductBasicInfo from "./components/ProductBasicInfo";
import ProductDescription from "./components/ProductDescription";
import ProductReviews from "./components/ProductReviews";

const ProductDetailPage = () => {
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const api = useApi();

  const [productDetail, setProductDetail] = useState(null);
  const [variants, setVariants] = useState([]);

  useEffect(() => {
    setLoading(true);
    (async () => {
      const detailResponse = await api.get(`shop/products/${params.code}`);
      // create promises
      const promises = detailResponse.data.variants.map(
        (variant_item_string) => {
          const variant_code = variant_item_string.split("/").reverse()[0];
          return api.get(`shop/product-variants/${variant_code}`);
        }
      );
      // get promises resolved
      const variantResponses = await Promise.all(promises);
      console.log(
        "🚀 ~ file: ProductDetailPage.jsx:24 ~ variantResponses:",
        variantResponses
      );
      //set productDetail data
      setProductDetail(detailResponse.data);
      // get response.data
      setVariants(variantResponses.map((item) => item.data));
      setLoading(false);
    })();
  }, [params.code]);

  console.log(
    "🚀 ~ file: ProductDetailPage.jsx:34 ~ ProductDetailPage ~ productDetail:",
    productDetail
  );

  console.log(variants);

  if (loading) {
    return (
      <div style={{ backgroundColor: "red", fontSize: 20, minHeight: "25vh" }}>
        Loading....
      </div>
    );
  }

  return (
    <div className="content">
      <ProductBasicInfo product={productDetail} variants={variants} />
      <ProductDescription product={productDetail} variants={variants} />
      <ProductReviews product={productDetail} variants={variants} />
    </div>
  );
};

export default ProductDetailPage;
