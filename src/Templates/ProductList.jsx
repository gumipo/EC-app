import React, { useEffect } from "react";
import { ProductCard } from "../Component/Products";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../reducks/Products/operations";
import { getProducts } from "../reducks/Products/selector";

const ProductList = () => {
  const dispatch = useDispatch();

  const selector = useSelector((state) => state);
  const products = getProducts(selector);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  console.log(products);

  return (
    <section className="c-section-wrapin">
      <div className="p-grid__row">
        {products.length > 0 &&
          products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              images={product.images}
              price={product.price}
            />
          ))}
      </div>
    </section>
  );
};
export default ProductList;
