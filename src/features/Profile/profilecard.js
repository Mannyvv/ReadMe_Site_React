import React from 'react';
import { Card,Button, CardBody, CardTitle, CardSubtitle, CardText, Container, CardHeader, CardFooter } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { Dispatch } from 'react';
import { useDispatch } from 'react-redux';
import { clearLoggedUserData } from '../User/usersSlice';
const ProfileCard = ({ user }) => {
   

    return (
        <Container>

            <Card style={{width: "25rem"}}>
                <CardHeader style={{backgroundColor:'lightblue'}}>
                    <CardTitle>{user.name}</CardTitle>
                </CardHeader>
                <CardBody style={{backgroundColor:''}}>
                    <h5>User Info: </h5>
                    <CardSubtitle><b>Username:</b> {user.username}</CardSubtitle>
                    <CardSubtitle><b>School: </b> {user.school}</CardSubtitle>
                    <CardSubtitle><b>Zipcode: </b> {user.zipcode}</CardSubtitle>
                    <CardText><b>Number of Students: </b>{user.numberOfStudents}</CardText>
                    
                </CardBody>
                <CardFooter>
                <h5>Wishlist:</h5>
                    <ul>
                        {user.wishlist.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <h5>Library:</h5>
                    <ul>
                        {user.library.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>

                </CardFooter>
                
                
            </Card>
        </Container>
    );
};

export default ProfileCard;
