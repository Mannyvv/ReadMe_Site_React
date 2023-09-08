import { Container } from "reactstrap";
import SubHeader from "../components/SubHeader";
import RowContent from "../components/RowContent";
import RowContentOpp from "../components/RowContentOpp";
import { Button } from "reactstrap"
import UserLoginForm from "../features/User/userLoginForm";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";



const HomePage = () => {
    const navigate = useNavigate()

    const goToProfile = () => {
        navigate('/ProfilePage')
    }
    const blurb = " Connect with like-minded parents, exchange recommendations, and enhance your child's reading journey."
    const userLoggedIn = useSelector((state) => state.users.userLoggedIn)


    return (
        <>
            <Container>
                <RowContent />

                <RowContentOpp blurb={blurb} />

            </Container>
            <Container style={{ textAlign: 'center' }}>
                {userLoggedIn ? <Button onClick={goToProfile} color="secondary" style={{ fontSize: '24px', padding: '20px 30px ', margin: '20px' }} >Go To Profile</Button> : <><Button color="secondary" style={{ fontSize: '24px', padding: '20px 30px ', margin: '20px' }}>
                    Register
                </Button>  <UserLoginForm /></>}

                

            </Container>
        </>
    )
}

export default HomePage;

