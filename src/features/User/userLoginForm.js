import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allExistingUsers, setLoggedUserData, setUserLoggedIn } from "./usersSlice";
import {
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
  Button,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import defaultAvatar from "../../app/assets/img/welcome.jpg";
import { ErrorMessage } from "formik";
import  {validateUserLoginInfo}  from "../User/usersSlice"
import {validateUserLoginform} from "../../utils/validateUserLoginForm";



import React from "react";

const UserLoginForm = () => {
  const [userInputFormData,setUserInputFormData] = useState("");
  const [invalidToggle, toggleInvalid] = useState("none")
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  

  const allUsers = useSelector(allExistingUsers)



  
  function handleLogin(values) {
      const userFormData = {
        avatar : defaultAvatar,
        userName : values.username,
        passWord : values.password
      }
        const validUser = allUsers.find((user) => user.username === userFormData.userName)
        console.log(validUser)
        if (validUser === undefined || userFormData.passWord != validUser.password){
          toggleInvalid("block")
          return
        }
        
        console.log(validUser.username)
        dispatch(setUserLoggedIn(true))
        dispatch(setLoggedUserData(validUser))
        setLoginModalOpen(false);
        navigate(`/ProfilePage/${validUser.name}`)
      }

      

     
      
      useEffect(() => {
        
      
      }, []);
  

  return (
    <>
      <span className="navbar-text ml-autot">
        {userInputFormData ? (
          <div style={{ width: "4rem", height: "4rem" }}>
            <img
              src={userInputFormData.avatar}
              alt={"user"}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        ) : (
          <Button
            onClick={() => setLoginModalOpen(true)}
            color="primary"
            style={{ fontSize: "24px", padding: "20px 30px ", margin: "20px" }}
          >
            Sign On
          </Button>
        )}
      </span>
      <Modal isOpen={loginModalOpen}>
        <ModalHeader toggle={() => setLoginModalOpen(false)}>Login</ModalHeader>
        <ModalBody>
          <Formik
            initialValues={{
              username: "",
              password: "",
            }}
            onSubmit={handleLogin}
            validate={validateUserLoginform}
          >
            <Form>
              <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Field
                  id="username"
                  name="username"
                  placeholder="Username"
                  className="form-control"
                ></Field>
                <ErrorMessage name="username">
                  {(msg) => <p className="text-danger">{msg}</p>}
                </ErrorMessage>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Field
                  id="password"
                  name="password"
                  placeholder="Password"
                  className="form-control"
                ></Field>
                <ErrorMessage name="password">
                  {(msg) => <p className="text-danger">{msg}</p>}
                </ErrorMessage>
              </FormGroup>
              <Button type="submit" color="primary">
                Login
              </Button>
              <h4 style={{display:invalidToggle, color:'red'}}>Incorrect Username or Password</h4>
            </Form>
          </Formik>
        </ModalBody>
      </Modal>
    </>
  );
};

export default UserLoginForm;
