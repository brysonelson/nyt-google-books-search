import React from "react";
import { Row, Col, Card } from "react-materialize";

function Jumbotron() {
  return (
    <Row>
      <Col s={10} className="offset-s1">
        <Card title='Google Books Search'>
          Search For and Save Books of Interest!
            </Card>
      </Col>
    </Row>
  );
}

export default Jumbotron;
