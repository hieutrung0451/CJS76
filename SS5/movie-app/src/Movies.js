import React from "react";
import { Button } from "reactstrap";

const Movies = (props) => {
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
        <Button color="danger">Delete</Button>
      </td>
    </tr>
  );
};

export default Movies;
