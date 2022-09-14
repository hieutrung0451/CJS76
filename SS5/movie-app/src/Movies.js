import React from "react";
import { Button } from "reactstrap";

const Movies = (props) => {
  const handleRemoveMovie = () => {
    props.onMovie(props.id);
  };

  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.title}</td>
      <td>{props.description}</td>
      <td>{props.createdAt}</td>
      <td>{props.updatedAt}</td>
      <td>
        <Button color="primary">Edit</Button>
        &nbsp;
        <Button color="danger" onClick={handleRemoveMovie}>
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default Movies;
