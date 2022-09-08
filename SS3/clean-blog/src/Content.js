import Post from "./Post";

const Content = () => {
  return (
    <div className="container px-4 px-lg-5" style={{ textAlign: "left" }}>
      <div className="row gx-4 gx-lg-5 justify-content-center">
        <div className="col-md-10 col-lg-8 col-xl-7">
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
        </div>
      </div>
    </div>
  );
};

export default Content;
