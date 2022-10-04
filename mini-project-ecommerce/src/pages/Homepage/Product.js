import React from "react";

const Product = (props) => {
  return (
    <div className="single-products-catagory clearfix">
      <a href="shop.html">
        <img src={props.image} alt="" />
        {/* Hover Content */}
        <div className="hover-content">
          <div className="line" />
          <p>From ${props.price}</p>
          <h4>{props.title}</h4>
        </div>
      </a>
    </div>
  );
};

export default Product;
