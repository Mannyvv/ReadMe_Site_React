import { Container } from "reactstrap";
import SubHeader from "../components/SubHeader";
import RowContent from "../components/RowContent";
import RowContentOpp from "../components/RowContentOpp";
import { Button } from "reactstrap"
import UserLoginForm from "../features/User/userLoginForm";



const HomePage = () => {

    const blurb = " Connect with like-minded parents, exchange recommendations, and enhance your child's reading journey."
   
    

    return (
        <>
        <Container>
            <RowContent />

            <RowContentOpp blurb={blurb} />
            
        </Container>
        <Container style={{textAlign:'center'}}>
            <Button color="secondary" style={{ fontSize: '24px', padding: '20px 30px ', margin:'20px' }}>
                Register
            </Button>
            <UserLoginForm/>
            
        </Container>
        </>
    )
}

export default HomePage;

