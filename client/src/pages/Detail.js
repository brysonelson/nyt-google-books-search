import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card } from "react-materialize";
import Jumbotron from "../components/Jumbotron";
import { Row, Col } from "react-materialize";
import API from "../utils/API";

class Detail extends Component {
  state = {
    book: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getBook(this.props.match.params.id)
      .then(res => this.setState({ book: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <wrapper>
        <Row>
          <Col className="offset-s1" s={10}>
          <Card title={this.state.book.title}>
          <Row>
            <Col s={12}>

              by {this.state.book.author}

            </Col>
            <Col s={12}>
              <article>
                <h4>Synopsis</h4>
                <p>
                  {this.state.book.synopsis}
                </p>
              </article>
            </Col>
            </Row>
          </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">

          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/saved">← Back to Saved Books</Link>
          </Col>
        </Row>

      </wrapper>
    );
  }
}

export default Detail;
