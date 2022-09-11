import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Movies from "./Movies";
import { useNavigate } from "react-router-dom";

const Edit = () => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  let history = useNavigate();

  let index = Movies.map((e) => {
    return e.id;
  }).indexOf(id);

  const handleSubmit = (e) => {
    e.preventDefault();

    let getMovies = Movies[index];
    getMovies.title = title;
    getMovies.description = desc;

    history("/");
  };

  useEffect(() => {
    setTitle(localStorage.getItem("title"));
    setDesc(localStorage.getItem("description"));
    setId(localStorage.getItem("id"));
  }, []);

  return (
    <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
      <Form.Group className="mb-3" controlId="formTitle">
        <Form.Control
          type="text"
          placeholder="Enter title"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        ></Form.Control>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formDesc">
        <Form.Control
          type="text"
          placeholder="Enter Description"
          value={desc}
          required
          onChange={(e) => setDesc(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Button type="submit" onClick={(e) => handleSubmit(e)}>
        Update
      </Button>
    </Form>
  );
};

export default Edit;
