import React, { useEffect, useState } from "react";
import { FormGroup, Label, Modal, ModalFooter, ModalBody, ModalHeader, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validateNewsLetterForm } from "../../utils/validateNewsLetterForm";
import { useDispatch } from "react-redux";
import { postNewsletterSignUp } from "./newsletterSlice";

const NewsLetterSignUpForm = () => {
  const [SignUpModalOpen, setSignUpModalOpen] = useState(false);
  const [thankYouModalOpen, setThankYouModalOpen] = useState(false);
  const [newsletterDropdownOpen, setNewsletterDropdownOpen] = useState(false);
  const [newsLetterInfo, setNewsLetterInfo] = useState("");
  const dispatch = useDispatch();

  function handleSignUp(values) {
    setSignUpModalOpen(false);
    setNewsLetterInfo(values);
    setThankYouModalOpen(true);
  }

  useEffect(() => {
    if (newsLetterInfo) {
        console.log("newsletter info")
      dispatch(postNewsletterSignUp(newsLetterInfo));
    }
  }, [newsLetterInfo]);

  const toggleDropdown = () => {
    setNewsletterDropdownOpen(!newsletterDropdownOpen);
  };

  return (
    <>
      <Dropdown nav isOpen={newsletterDropdownOpen} toggle={toggleDropdown}>
        <DropdownToggle nav caret>
          <i className="fa fa-newspaper-o fa-sm" /> News Letter
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>
            <a onClick={() => setSignUpModalOpen(true)}>Sign-Up</a>
          </DropdownItem>
          <DropdownItem>
            <a style={{ color: 'black' }} href="/Newsletter/PastNewsLetter">Past News Letter</a>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <Modal isOpen={SignUpModalOpen}>
        <ModalHeader toggle={() => setSignUpModalOpen(false)}>
          Newsletter Sign-Up Form
        </ModalHeader>
        <ModalBody>
          <Formik
            initialValues={{
              email: "",
              fullName: "",
              zipCode: ""
            }}
            onSubmit={handleSignUp}
            validate={validateNewsLetterForm}
          >
            <Form>
              <FormGroup>
                <Label htmlFor="email">Email:</Label>
                <Field id="email" name="email" placeholder="example@gmail.com" className="form-control" />
                <ErrorMessage name="email">
                  {(msg) => <p className="text-danger">{msg}</p>}
                </ErrorMessage>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="fullName">Full Name:</Label>
                <Field id="fullName" name="fullName" placeholder="John Doe" className="form-control" />
                <ErrorMessage name="fullName">
                  {(msg) => <p className="text-danger">{msg}</p>}
                </ErrorMessage>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="zipCode">Zip Code:</Label>
                <Field id="zipCode" name="zipCode" placeholder="90805" className="form-control" />
                <ErrorMessage name="zipCode">
                  {(msg) => <p className="text-danger">{msg}</p>}
                </ErrorMessage>
              </FormGroup>
              <ModalFooter>
                <Button onClick={() => setSignUpModalOpen(false)} color="secondary">
                  Cancel
                </Button>
                <Button type="submit" color="primary">
                  Sign Up
                </Button>
              </ModalFooter>
            </Form>
          </Formik>
        </ModalBody>
      </Modal>

      {/* Thank you Modal */}
      <Modal isOpen={thankYouModalOpen} toggle={() => setThankYouModalOpen(!thankYouModalOpen)}>
        <ModalHeader toggle={() => setThankYouModalOpen(!thankYouModalOpen)}>
          Thank You for Signing Up {newsLetterInfo.fullName}!
        </ModalHeader>
        <ModalBody>
          Keep an eye out for this month's newsletter and other exciting news.
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => setThankYouModalOpen(false)} color="primary">
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default NewsLetterSignUpForm;
