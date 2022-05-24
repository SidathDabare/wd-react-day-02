import { Component } from "react";
import { Carousel, Container, ListGroup, Row } from "react-bootstrap";
import arrayOfBooks from "../books/history.json"
import CarouselI from "./CarouselI"

class LatestRelese extends Component {
    state = {
        selectedBook: null,
    }
    setSelectedBook = (asin) => { this.setState({ selectedBook: asin }) }
    render() {
        return (
            <Container>
                <h3>Latest Release </h3>
                <Row>

                    <Carousel className="mt-3 bg-dark col-12 ">
                        {arrayOfBooks.map((book) => (
                            <CarouselI key={book.asin} bookData={book} setSelectedBook={this.setSelectedBook} selectedBook={this.state.selectedBook} />
                        ))}
                    </Carousel>
                    <div className="col-6">


                    </div>

                </Row>
            </Container>
        );
    }
}
export default LatestRelese