import React from "react";
// import "./style.css";
import { Link } from "react-router-dom";
import { Row, Col, Card, Collection, CollectionItem, Button } from "react-materialize";

function SearchBar(props) {
    return (
        <Row>
            <Col s={10} className="offset-s1">
                <Card title="Results">
                    {!props.results ? (<h3>Please Use The Search Bar Above</h3>) : (
                        <Row>
                            <Col s={10} className="offset-s1">
                                <Collection>
                                    {props.results.map(book => (
                                        <CollectionItem key={book._id}>
                                            <Row>
                                                <Col s={10}>
                                                    <Row>
                                                        <Col s={12}>
                                                            <strong>
                                                                {book[1].volumeInfo.title} by {book[1].volumeInfo.authors}
                                                            </strong>
                                                            <br />
                                                            <hr />
                                                            <br />
                                                        </Col>
                                                        <Col s={12}>
                                                            <p>
                                                                {book[1].volumeInfo.description}
                                                            </p>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col s={2}>
                                                    <Button className="red" onClick={() => this.saveBook(book[1].volumeInfo.title)} right>Delete</Button>
                                                </Col>
                                            </Row>
                                        </CollectionItem>
                                    ))}
                                </Collection>
                            </Col>
                        </Row>
                    )}

                </Card>
            </Col>
        </Row>
    );
}

export default SearchBar;
