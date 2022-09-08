import React from "react";
import Header from "./Header";
import Content from "./Content";
import Post from "./Post";

const Home = () => {
  return (
    <div className="Home">
      <Header
        image="url('assets/img/home-bg.jpg')"
        heading="Clean Blog"
        subheading="A Blog Theme by Start Bootstrap"
      />
      <Content>
        <Post
          title="Man must explore, and this is exploration at its greatest"
          sub="Problems look mighty small from 150 miles up"
          date="September 24, 2022"
        />
        <Post
          title="I believe every human has a finite number of heartbeats. I don't intend to waste any of mine."
          date="September 18, 2022"
        />
        <Post
          title="Science has not yet mastered prophecy"
          sub="We predict too much for the next year and yet far too little for the next ten."
          date="August 24, 2022"
        />
        <Post
          title="Failure is not an option"
          sub="Many say exploration is part of our destiny, but it’s actually our duty to future generations."
          date="July 8, 2022"
        />
        {/* Pager*/}
        <div className="d-flex justify-content-end mb-4">
          <a className="btn btn-primary text-uppercase" href="#!">
            Older Posts →
          </a>
        </div>
      </Content>
    </div>
  );
};

export default Home;
