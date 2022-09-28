import React, { useState } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useTranslation } from "react-i18next";

const Page = () => {
  const [text, setText] = useState("Login");
  const { t, i18n } = useTranslation();

  return (
    <div className="page" style={{ width: "100%", height: "100vh" }}>
      <Header title={text} />
      <Content setTitle={setText} translation={t}/>
      <Footer setTranslation={i18n}/>
    </div>
  );
};

export default Page;
