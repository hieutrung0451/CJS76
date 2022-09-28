import React from "react";

const Footer = (props) => {
  const handleChangeLanguage = (e) => {
    props.setTranslation.changeLanguage(e.target.value);
  };

  return (
    <div
      style={{
        height: "48px",
        backgroundColor: "#ccc",
        textAlign: "center",
        padding: "8px",
      }}
    >
      <select style={{ marginTop: "16px" }} onChange={handleChangeLanguage}>
        <option value="vn">vn</option>
        <option value="en">en</option>
        <option value="jp">jp</option>
      </select>
    </div>
  );
};

export default Footer;
