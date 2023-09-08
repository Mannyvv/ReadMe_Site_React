import { Container } from "reactstrap";
import SubHeader from "../components/SubHeader";
import RowContent from "../components/RowContent";
import RowContentOpp from "../components/RowContentOpp";


const AboutUs = () => {
    const blurb = "Welcome to ReadMe, your destination for nurturing a love for reading in children. \
     Discover, access, and share captivating children's books effortlessly. Our curated collection suits various ages, \
     interests, and cultures. Connect with like-minded parents, exchange recommendations, and enhance your child's reading journey. \
     We champion equity and inclusivity, offering diverse books that inspire empathy and understanding. Join us on this adventure of exploration, \
     learning, and shared experiences. Welcome to ReadMe, where stories unfold!"

    return (
        <Container>
            <SubHeader current='About Us' />
            <RowContentOpp blurb={blurb} />
            <RowContent />
        </Container>
    )
}

export default AboutUs;

