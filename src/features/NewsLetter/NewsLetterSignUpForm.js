import { FormGroup, Label, Modal, ModalFooter, ModalBody, ModalHeader } from "reactstrap"
import { Button, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap"
import { useState } from "react";
import { Formik, Form, Field ,ErrorMessage} from "formik";
import { validateNewsLetterForm } from "../../utils/validateNewsLetterForm";
import { Link } from "react-router-dom";


const NewsLetterSignUpForm = ({ state }) => {
    const [SignUpModalOpen, setSignUpModalOpen] = useState(false)
    const [newsletterDropdownOpen, setNewsletterDropdownOpen] = useState(false);


    function handleSignUp(values){
        
    }

    const toggleDropdown = () => {
        setNewsletterDropdownOpen(!newsletterDropdownOpen);
    }


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
                       
                        <a style={{color:'black'}} href="/Newsletter/PastNewsLetter">Past News Letter</a>
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
                        validate={validateNewsLetterForm}>
                        <Form>
                            <FormGroup>
                                <Label htmlFor="email">Email:</Label>
                                <Field id='email' name="email" placeholder='example@gmail.com' className='form-control'></Field>
                                <ErrorMessage name='email'>
                                    {(msg) => <p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="fullName">Full Name:</Label>
                                <Field id='fullName' name="fullName" placeholder='John Doe' className='form-control'></Field>
                                <ErrorMessage name='fullName'>
                                    {(msg) => <p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="zipCode">Zip Code:</Label>
                                <Field id='zipCode' name="zipCode" placeholder='90805' className='form-control'></Field>
                                <ErrorMessage name='zipCode'>
                                    {(msg) => <p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
                            </FormGroup>

                        </Form>
                    </Formik>

                </ModalBody>
                <ModalFooter>
                    <Button onClick={() => setSignUpModalOpen(false)} color='secondary'>Cancel</Button>
                    <Button type='submit' color='primary'>Sign Up</Button>
                </ModalFooter>
            </Modal>
        </>
    )

}

export default NewsLetterSignUpForm