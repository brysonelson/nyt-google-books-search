import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";
import { Row, Col, Card, Collection, CollectionItem, Button } from "react-materialize";
import API from "../utils/API";
import SearchResults from "../components/SearchResults";

class Search extends Component {
  state = {
    books: [],
    search: "",
    results: []
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
    // console.log("submitted");
    // console.log(this.state.search);
    if (this.state.search) {
      API.searchBooks(this.state.search)
        .then(res => {
          if (res.data.status === "error") {
            throw new Error(res.data.message);
          }
          // console.log(res.data.items);
          const arr = Object.keys(res.data.items).map((key) => [key, res.data.items[key]]);
          this.setState({ results: arr, error: "" });
          // console.log(this.state.results);
          arr.map(book => {
            console.log(book[1].volumeInfo.title);
          })
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <wrapper>
        <Jumbotron />
        <SearchBar
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <SearchResults results={this.state.results}/>
      </wrapper>
    );
  }
}

export default Search;
