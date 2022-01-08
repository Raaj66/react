import React, { Component } from "react";
import { Alert, Button } from "react-bootstrap";

export default class Bootstrap extends Component {
  render() {
    return (
      <div>
        <h1>Bootstrap</h1>
        <Button>Click Me</Button>

        
        <div
          class="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          <strong>Oh snap! You got an error!</strong>
          <p>Change this and that and try again.</p>
          <button
            type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <Alert dismissible variant="danger">
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      <p>
        Change this and that and try again.
      </p>
    </Alert>
      </div>
    );
  }
}
