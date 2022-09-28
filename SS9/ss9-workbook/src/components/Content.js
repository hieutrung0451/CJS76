import React, { useState } from "react";

const Content = (props) => {
  const [name, setName] = useState("");
  const [show, setShow] = useState(true);

  const handleChangeTitle = (e) => {
    e.preventDefault();
    props.setTitle(name);
    setShow(false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "507px",
      }}
    >
      {show ? (
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            width: "36%",
            height: "200px",
            borderRadius: "12px",
            border: "1px solid black",
          }}
        >
          <span
            style={{
              backgroundColor: "#ccc",
              width: "100%",
              height: "26px",
              textAlign: "center",
              paddingTop: "12px",
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
              fontSize: "16px",
            }}
          >
            {props.translation("Login.1")}
          </span>
          <input
            type="text"
            placeholder={props.translation("username.1")}
            style={{ width: "400px", textAlign: "center" }}
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <button
            style={{
              marginBottom: "16px",
              padding: "4px 20px",
              borderRadius: "4px",
              border: "none",
              backgroundColor: "#4763c6",
              color: "#fff",
            }}
            onClick={handleChangeTitle}
          >
            {props.translation("LOGIN.1")}
          </button>
        </form>
      ) : (
        <div>
          <h1>
            {props.translation("hello.1")}, {name}
          </h1>
        </div>
      )}
    </div>
  );
};

export default Content;
