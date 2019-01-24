import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Collection, CollectionItem, Button } from "react-materialize";

function BookDisplay(props) {
    return (
        <Row>
            <Col s={10} className="offset-s1">
                <Card title="Saved Books">
                    <Collection>
                        {props.bookList.map(book => (
                            <CollectionItem key={book._id}>
                                <Row>
                                    <Col s={10}>
                                        <Row>
                                            <Col s={12}>
                                            <Link to={"/books/" + book._id}>
                                                <strong>
                                                    {book.title} by {book.author}
                                                </strong>
                                            </Link>
                                            <br/>
                                            <hr/>
                                            <br/>
                                            </Col>
                                            <Col s={12}>
                                                <p>
                                                    {book.synopsis}
                                                </p>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col s={2}>
                                        <Button className="red" onClick={() => this.deleteBook(book._id)} right>Delete</Button>
                                    </Col>
                                </Row>
                            </CollectionItem>
                        ))}
                    </Collection>
                </Card>
            </Col>
        </Row>
    );
}

export default BookDisplay;
