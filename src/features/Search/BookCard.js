import React, { useState } from "react";
import { Card, Row, CardBody, CardImg, CardTitle, CardSubtitle, Button } from "reactstrap";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { useSelector } from "react-redux";
import NoImageFoundJpg from '../../app/assets/img/noImg.jpg'

const BookCard = ({ book }) => {

    const [showFullDescription, setShowFullDescription] = useState(false);



    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    }
    

    const isLoading = useSelector((state) => state.search.isLoading);
    const errMsg = useSelector((state) => state.search.errMsg);

    //Remember that this is 1 single book
    const bookInfo = book.volumeInfo;
    // Shorten Book Title
    let title = bookInfo.title;
    if (bookInfo.title.length > 60) {
        title = `${bookInfo.title.slice(0, 60)}...`;
    }
    const authors = bookInfo.authors;
    // Check for average rating : True - Rating and Star, False - N/A
    const averageRating = bookInfo.averageRating ? `${bookInfo.averageRating}` : "N/A";
    // Change en to English string
    if (bookInfo.language === "en") {
        var languages = "English"
    }
    // Shorten Description: Wanted to add "More" button to reveal rest of description

    const description_1 = bookInfo.description.slice(0, 150);
    const description_2 = bookInfo.description.slice(151,400);
    // Check for thumbnail image : True -> Using Image, False -> Use "image not available png"
    const thumbnailUrl = bookInfo.imageLinks ? bookInfo.imageLinks.smallThumbnail : NoImageFoundJpg;
    const fullDescription = description_1 + description_2
    if (isLoading) {
        return (
            <div className="col-md-3 col-lg-4">
                <Loading />
            </div>
        );
    };

    if (errMsg) {
        return (
            <Row>
                <Error errMsg={errMsg} />
            </Row>
        );
    }
    return (
        <div className="col-md-3 col-lg-4">
            <Card className="book-card border border-info rounded-5" style={{ marginBottom: '50px', width: '100%', maxWidth: '300px' }}>
                <CardImg className="rounded-5" top src={thumbnailUrl} alt="No Image Found" style={{ maxWidth: "100%", height: "auto", padding:'5px' }} />
                <CardBody>
                    <CardTitle>
                        <a href={`https://www.google.com/search?q=${title}`} style={{ color: "black" }}>
                            {title}
                        </a>
                    </CardTitle>
                    <CardSubtitle>
                        <b>Average Rating:</b> {averageRating}<i className="fa fa-star"></i>
                    </CardSubtitle>
                    <CardSubtitle>
                        <b>By: </b>
                        {authors?authors.map((author, index) => (
                            <a key={index} className="text-info" href={`https://www.google.com/search?q=${author}`}>
                                {author}
                            </a>
                        )):'N/A'}
                    </CardSubtitle>
                    <CardSubtitle>
                        <b>Languages:</b> {languages}
                    </CardSubtitle>
                    <hr />
                    <p className="card-text description">
                        {showFullDescription ? fullDescription : 
                            <>
                                {description_1}{description_2 && <span id="dots">...</span>}
                            </>
                        }
                    </p>
                    {description_2 && (
                        <Button color="success" onClick={toggleDescription}>
                            {showFullDescription ? "Read less" : "Read more"}
                        </Button>
                    )}

                    {/* {https://getbootstrap.com/docs/5.1/forms/checks-radios} */}
                    <div className="form-check form-switch" style={{marginTop:'10px'}}>
                        <input className="form-check-input" type="checkbox" id="toggleButton" style={{scale:'1.3',marginLeft:'-10%'}} />
                        <label className="form-check-label" htmlFor="toggleButton" style={{paddingLeft:'10px'}}>
                            Personal Library
                        </label>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};

export default BookCard;
