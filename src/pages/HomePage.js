import { Container } from "reactstrap";
import SubHeader from "../components/SubHeader";
import RowContent from "../components/RowContent";

const HomePage = () => {
    return(
        <Container>
            <SubHeader current='Home'/>
            <RowContent/>
            <RowContent/> 
        </Container>
    )
}
 
export default HomePage;

