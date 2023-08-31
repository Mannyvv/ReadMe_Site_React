import { Container, Row } from "reactstrap";
import SubHeader from "../components/SubHeader";
import RowContent from "../components/RowContent";
import RowContentOpp from "../components/RowContentOpp";
import student from "../app/assets/img/studentReading.jpg";



const NewsLetterPage = () => {



    return (
        <>

            <Container style={{ textAlign: 'center' }}>
                <SubHeader current='NewsLetter' />
                <Row style={{ margin: '25px 0px 50px 0px' }}>
                    <h1>🌞 Join our Summer Reading Challenge! 📚🏖️</h1>
                </Row>
                <Row >
                    <h1>
                        Get ready to dive into the world of exciting stories this summer. Our Summer Reading Challenge is here!
                        Encourage your young readers to explore new adventures and unlock their imagination through the magic of books.
                        Join us for a season of reading fun, exclusive rewards, and engaging activities that will make this summer one to remember.",
                    </h1>
                </Row>
                <Row>
                    <iframe width="560" height="560" src="https://www.youtube.com/embed/zVsG6uzxW5c?si=R13ZQtE_osm9GlrZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </Row>
            </Container >
        </>
    )
}

export default NewsLetterPage;

