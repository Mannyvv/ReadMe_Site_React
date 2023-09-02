import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import SubHeader from "../components/SubHeader";
import RowContent from "../components/RowContent";
import RowContentOpp from "../components/RowContentOpp";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersData } from "../features/User/usersSlice";
import ProfileCard from "../features/Profile/profilecard";

const ProfilePage = () => {
  

  const userData = useSelector((state) => state.users.loggedInUserData);



  return (
    <Container>
      <Row>
        <ProfileCard user = {userData}/>
      </Row>
    </Container>
  );
};

export default ProfilePage; 
