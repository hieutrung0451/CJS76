// ! Hoan thanh phan Edit
// TODO: Tao mot button Edit thi lay duoc thong tin o input va cap nhap vao state

import React, { useState } from "react";
import {
  Button,
  Container,
  Row,
  Table,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import "./App.css";
import Movies from "./Movies";

const App = () => {
  const [data, setData] = useState([
    {
      id: 8,
      title: "Avengers Endgame",
      description: "2019",
      createdAt: "2020-09-24 08:46:02",
      updatedAt: "2020-09-24 08:46:02",
    },
    {
      id: 9,
      title: "Avengers Infinity War",
      description: "2018",
      createdAt: "2020-09-24 08:46:22",
      updatedAt: "2020-09-24 08:46:22",
    },
    {
      id: 10,
      title: "Batman Bad Blood",
      description: "2016",
      createdAt: "2020-09-24 08:46:42",
      updatedAt: "2020-09-24 08:46:42",
    },
  ]);

  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

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

  const handleAddNewMovie = () => {
    const newMovie = {
      id: Math.floor(Math.random() * 100) + 1,
      title: title,
      description: description,
      createdAt: dateTime(),
      updatedAt: dateTime(),
    };
    const dataTemp = [...data];
    dataTemp.push(newMovie);
    setData(dataTemp);
  };

  const handleDeleteMovie = (id) => {
    const dataTemp = [...data].filter((e) => !(e.id === id));
    setData(dataTemp);
  };

  const handleEditMovie = (id, title, description) => {
    localStorage.setItem("id", id);
    localStorage.setItem("title", title);
    localStorage.setItem("description", description);
    setId(localStorage.getItem("id"));
    setTitle(localStorage.getItem("title"));
    setDescription(localStorage.getItem("description"));
  };

  const handleUpdateMovie = () => {
    localStorage.setItem("id", id);
    localStorage.setItem("title", title);
    localStorage.setItem("description", description);

    const updateMovie = {
      id: localStorage.getItem("id"),
      title: localStorage.getItem("title"),
      description: localStorage.getItem("description"),
      createdAt: dateTime(),
      updatedAt: dateTime(),
    };

    const dataTemp = [...data].filter((e) => e.id !== id);
    dataTemp.push(updateMovie);
    setData(dataTemp);
  };

  return (
    <Container className="container-movie">
      <Row>
        <Button
          color="success"
          block="false"
          className="btn-create"
          onClick={handleAddNewMovie}
        >
          Create
        </Button>
        <Button
          color="primary"
          block="false"
          className="btn-update"
          onClick={handleUpdateMovie}
        >
          Update
        </Button>
      </Row>
      <Row>
        <FormGroup>
          <Label>Title</Label>
          <Input
            id="title"
            name="title"
            placeholder="Enter your title"
            type="text"
            value={title}
            onChange={handleChangeTitle}
          />
        </FormGroup>
        <FormGroup>
          <Label>Description</Label>
          <Input
            id="description"
            name="description"
            placeholder="Enter your description"
            type="text"
            value={description}
            onChange={handleChangeDescription}
          />
        </FormGroup>
      </Row>
      <Row>
        <h1>Movie Index</h1>
      </Row>
      <Row>
        <Table bordered>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Created At</th>
              <th>Updated At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <Movies
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  createdAt={item.createdAt}
                  updatedAt={item.updatedAt}
                  onMovieDelete={handleDeleteMovie}
                  onMovieEdit={handleEditMovie}
                />
              );
            })}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default App;
