import { Component } from "react";
import { Carousel, Container, ListGroup, Row } from "react-bootstrap";
import arrayOfBooks from "../books/history.json"

class CarouselI extends Component {

    render() {
        return (

            <Carousel.Item >
                <img
                    className="bg-dark carosal-image"
                    src={this.props.bookData.img}
                    alt="First slide"
                    onClick={() => {
                        console.log('you clicked an image!' + this.props.bookData.asin)
                        this.props.setSelectedBook(this.props.bookData.asin)

                    }}
                />
                <Carousel.Caption className="bg-dark content border-1">
                    <h6 style={{ color: this.props.bookData.asin === this.props.selectedBook ? "orange" : "red" }}>{this.props.bookData.title}</h6>
                    <p>Category : {this.props.bookData.category}</p>
                    <p>${this.props.bookData.price}</p>
                </Carousel.Caption>
            </Carousel.Item>

        );
    }
}
export default CarouselI 