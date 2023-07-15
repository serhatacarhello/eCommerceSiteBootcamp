import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useApi from "../hooks/useApi";

const ProductDetailPage = () => {
  const params = useParams();
  const api = useApi();
  const [productDetail, setProductDetail] = useState(null);
  const [variants, setVariants] = useState([]);

  useEffect(() => {
    (async () => {
      const detailResponse = await api.get(`shop/products/${params.code}`);
      setProductDetail(detailResponse.data);
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
      // get response.data
      setVariants(variantResponses.map((item) => item.data));
    })();
  }, [params.code]);

  return (
    <div>
      <h2>ProductDetailPage</h2>
    </div>
  );
};

export default ProductDetailPage;
