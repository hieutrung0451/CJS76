import React, { useEffect, useState } from "react";
import Product from "./Product";

const Homepage = () => {
  const [listProducts, setListProducts] = useState([]);

  useEffect(() => {
    fetch("https://633ae6e4471b8c395577e166.mockapi.io/api/v1/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setListProducts(data);
      }, []);
  });

  return (
    <div className="products-catagories-area clearfix">
      <div className="amado-pro-catagory clearfix">
        {listProducts.map((product) => {
          return (
            <Product
              title={product.title}
              price={product.price}
              image={product.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Homepage;
