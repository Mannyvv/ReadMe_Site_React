import { Container } from "reactstrap";
import SubHeader from "../components/SubHeader";
import RowContent from "../components/RowContent";
import RowContentOpp from "../components/RowContentOpp";
import { Button } from "reactstrap"


const HomePage = () => {

    const blurb = " Connect with like-minded parents, exchange recommendations, and enhance your child's reading journey."


    return (
        <>
        <Container>
            <RowContent />

            <RowContentOpp blurb={blurb} />
            
        </Container>
        <Container>
            <Button color="secondary" style={{ fontSize: '24px', padding: '20px 30px ', margin:'20px' }}>
                Register
            </Button>
            <Button color="primary" style={{ fontSize: '24px', padding: '20px 30px' }}>
                Sign In
            </Button>
        </Container>
        </>
    )
}

export default HomePage;

