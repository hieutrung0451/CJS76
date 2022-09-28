import React from "react";

const Header = (props) => {
  return (
    <div
      style={{
        height: "48px",
        backgroundColor: "#ccc",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "8px",
      }}
    >
      <span>MindX</span>
      <a href="#">{props.title}</a>
    </div>
  );
};

export default Header;
