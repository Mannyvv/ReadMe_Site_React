import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import SubHeader from "../components/SubHeader";
import RowContent from "../components/RowContent";
import RowContentOpp from "../components/RowContentOpp";
import { useDispatch, useSelector } from "react-redux";
import ProfileCard from "../features/Profile/profilecard";
import { useNavigate } from "react-router-dom";
import { clearLoggedUserData, setUserLoggedIn } from "../features/User/usersSlice";

const ProfilePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function logOut(){
      dispatch(clearLoggedUserData({}));
      dispatch(setUserLoggedIn(false));
      navigate(`/`)
  }
  
  
  const blurb = "This is a holder for profile page verbage"
  const userData = useSelector((state) => state.users.loggedInUserData);



  return (
    <Container>
      <Row>
        <ProfileCard user = {userData}/>
        <RowContentOpp blurb={blurb}/>
        <Button onClick={logOut}>Log User Out</Button>
      </Row>
    </Container>
  );
};

export default ProfilePage; 
