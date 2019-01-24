import React from "react";
import "./style.css";
import { Row, Col, Card, Button, Input } from "react-materialize";

function SearchBar(props) {
    return (
        <Row>
            <Col s={10} className="offset-s1">
                <Card className="search-form z-depth-2">
                    <form>
                        <Input 
                            name="search"
                            value={props.search}
                            onChange={props.handleInputChange} 
                            s={10} 
                            placeholder="Search" 
                            label="Search For A Book" />
                        <Button onClick={props.handleFormSubmit} type="submit" value="Search" waves='light'>Search</Button>
                    </form>
                </Card>
            </Col>
        </Row>
    );
}

export default SearchBar;
