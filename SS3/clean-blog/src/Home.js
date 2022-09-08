import React from "react";
import Navigation from "./Navigation";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="Home">
      <Navigation />
      <Header
        image="url('assets/img/home-bg.jpg')"
        heading="Clean Blog"
        subheading="A Blog Theme by Start Bootstrap"
      />
      <Content />
      <Footer />
    </div>
  );
};

export default Home;
