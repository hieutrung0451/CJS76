const Content = (props) => {
  return (
    <div className="container px-4 px-lg-5" style={{ textAlign: "left" }}>
      <div className="row gx-4 gx-lg-5 justify-content-center">
        <div className="col-md-10 col-lg-8 col-xl-7">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Content;
