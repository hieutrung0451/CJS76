import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Movies from "./Movies";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  let history = useNavigate();

  const dateTime = () => {
    let today = new Date();
    let date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    let time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date + " " + time;

    return dateTime;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const ids = uuid();
    let uniqueId = ids.slice(0, 8);

    let getTitle = title;
    let getDesc = desc;

    Movies.push({
      id: uniqueId,
      title: getTitle,
      description: getDesc,
      createdTime: dateTime(),
      updateTime: dateTime(),
    });

    history("/");
  };

  return (
    <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
      <Form.Group className="mb-3" controlId="formTitle">
        <Form.Control
          type="text"
          placeholder="Enter title"
          required
          onChange={(e) => setTitle(e.target.value)}
        ></Form.Control>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formDesc">
        <Form.Control
          type="text"
          placeholder="Enter Description"
          required
          onChange={(e) => setDesc(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Button type="submit" onClick={(e) => handleSubmit(e)}>
        Submit
      </Button>
    </Form>
  );
};

export default Add;
