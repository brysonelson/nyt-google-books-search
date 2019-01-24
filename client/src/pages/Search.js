import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import SearchBar from "../components/SearchBar";
import { Row, Col, Card } from "react-materialize";
import API from "../utils/API";

class Search extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        // this.setState({ books: res.data, title: "", author: "", synopsis: "" })
        console.log(res)
      )
      .catch(err => console.log(err));
      
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <wrapper>
        <Jumbotron />
        <SearchBar search={this.handleFormSubmit} />
        <Row>
            <Col s={10} className="offset-s1">
                <Card title="Results">
                    
                </Card>
            </Col>
        </Row>
      </wrapper>
    );
  }
}

export default Search;
