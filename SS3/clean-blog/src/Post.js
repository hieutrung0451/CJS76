const Post = (props) => {
  return (
    <div className="post">
      <div className="post-preview">
        <a href="post.html">
          <h2 className="post-title">{props.title}</h2>
          <h3 className="post-subtitle">{props.sub}</h3>
        </a>
        <p className="post-meta">
          Posted by
          <a href="#!"> Start Bootstrap </a>
          on {props.date}
        </p>
      </div>
      <hr className="my-4" />
    </div>
  );
};

export default Post;
