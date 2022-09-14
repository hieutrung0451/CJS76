import React from "react";
import { Button, Container, Row, Table } from "reactstrap";
import "./App.css";
import Movies from "./Movies";

const App = () => {
  const data = [
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
  ];

  return (
    <Container className="container-movie">
      <Row>
        <Button color="success" block="false" className="btn-create">
          success
        </Button>
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
