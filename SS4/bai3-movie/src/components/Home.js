import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import Movies from "./Movies";

const Home = () => {
  let history = useNavigate();

  const handleEdit = (id, title, desc) => {
    localStorage.setItem("id", id);
    localStorage.setItem("title", title);
    localStorage.setItem("description", desc);
  };

  const handleDelete = (id) => {
    let index = Movies.map((e) => {
      return e.id;
    }).indexOf(id);

    Movies.splice(index, 1);
    history("/");
  };

  return (
    <>
      <div style={{ margin: "10rem" }}>
        <Link to="create/">
          <button className="btn btn-success">Create New</button>
        </Link>
        <h1>Movie Index</h1>
        <Table bordered hover size="md">
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
            {Movies.map((item) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>{item.createdTime}</td>
                  <td>{item.updateTime}</td>
                  <td>
                    <Link to="/edit">
                      <Button
                        onClick={() =>
                          handleEdit(item.id, item.title, item.description)
                        }
                      >
                        Edit
                      </Button>
                    </Link>
                    &nbsp;
                    <Button
                      className="btn btn-danger"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Home;
