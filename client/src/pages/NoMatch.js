import React from "react";
import { Row, Col } from "react-materialize";
import Jumbotron from "../components/Jumbotron";

function NoMatch() {
  return (
    <wrapper fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>404 Page Not Found</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </Jumbotron>
        </Col>
      </Row>
    </wrapper>
  );
}

export default NoMatch;
