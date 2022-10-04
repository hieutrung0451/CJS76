import React, { useState, useEffect } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Table,
} from "reactstrap";
import "./App.css";
import Movie from "./Movies";

const App = () => {
  const [listMoviesData, setListMoviesData] = useState([]);

  useEffect(() => {
    fetch("https://633ae6e4471b8c395577e166.mockapi.io/api/v1/movies")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setListMoviesData(data);
      });
  }, []);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [movieUpdate, setMovieUpdate] = useState({});
  const [isCreate, setIsCreate] = useState(true);

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleAddNewMovie = () => {
    const newMovie = {
      title: title,
      description: description,
    };

    fetch("https://633ae6e4471b8c395577e166.mockapi.io/api/v1/movies", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMovie),
    })
      .then(function (res) {
        return res.json();
      })
      .catch(function (data) {
        setIsCreate(!isCreate);
      });

    // const listMovieTemp = [...listMoviesData];
    // listMovieTemp.push(newMovie);
    // setListMoviesData(listMovieTemp);
  };

  const handleDeleteMovie = (id) => {
    const listMovieTemp = [...listMoviesData];
    const movies = listMovieTemp.filter((element) => !(element.id === id));
    console.log("movies: ", movies);
    setListMoviesData(movies);
  };

  const handleGetDataUpdate = (id) => {
    const movies = [...listMoviesData];
    const index = movies.findIndex((movie) => {
      return movie.id === id;
    });
    setTitle(movies[index].title);
    setDescription(movies[index].description);
    setMovieUpdate(movies[index]);
  };

  const handleUpdateMovie = () => {
    const movies = [...listMoviesData];
    const index = listMoviesData.findIndex((movie) => {
      return movie.id === movieUpdate.id;
    });

    movies[index].title = title;
    movies[index].description = description;

    setListMoviesData([...movies]);
    setTitle("");
    setDescription("");
  };

  return (
    <Container className="container-crud">
      <Row>
        <Col span={4}>
          <Button
            color="success"
            block="false"
            className="btn-create"
            onClick={handleAddNewMovie}
          >
            Create
          </Button>
        </Col>
        <Col span={4}>
          {movieUpdate.id ? (
            <Button
              color="primary"
              block="false"
              className="btn-create"
              onClick={handleUpdateMovie}
            >
              Update
            </Button>
          ) : (
            ""
          )}
        </Col>
      </Row>
      <Row>
        <Form>
          <FormGroup>
            <Label>Title</Label>
            <Input
              id="title"
              name="title"
              placeholder="Enter your title..."
              type="text"
              value={title}
              onChange={handleChangeTitle}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Description</Label>
            <Input
              id="description"
              name="description"
              placeholder="Enter your description..."
              type="text"
              value={description}
              onChange={handleChangeDescription}
            />
          </FormGroup>
        </Form>
      </Row>
      <Row>
        <h1>Movie Index</h1>
      </Row>
      <Row>
        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Description</th>
              <th>Created At</th>
              <th>Updated At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {listMoviesData.map((item) => {
              return (
                <Movie
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  create={item.createdAt}
                  update={item.updatedAt}
                  onMovie={handleDeleteMovie}
                  onUpdate={handleGetDataUpdate}
                ></Movie>
              );
            })}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default App;
