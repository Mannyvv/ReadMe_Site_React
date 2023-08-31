import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="site-footer">
            <Container>
                <Row style={{justifyContent:'center'}}>
                    <Col xs={{ size: 4, offset: 1 }} sm='2'>
                        <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li style={{color:"red"}}>
                            <Link className="link" to="/">Home</Link>
                        </li>
                        <li>
                            <Link className="link" to="/directory">Books</Link>
                        </li>
                        <li>
                            <Link className="link" to="/about">About Us</Link>
                        </li>
                        <li>
                            <Link className="link" to="/contact">contact</Link>
                        </li>
                    </ul>
                    </Col>
                    <Col xs='6' sm='3' className='text-center'><h5>Social</h5>
                        <a
                            className='btn btn-social-icon btn-instagram'
                            href='http://instagram.com/'
                        >
                            <i className='fa fa-instagram' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-facebook'
                            href='http://www.facebook.com/'
                        >
                            <i className='fa fa-facebook' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-twitter'
                            href='http://twitter.com/'
                        >
                            <i className='fa fa-twitter' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-google'
                            href='http://youtube.com/'
                        >
                            <i className='fa fa-youtube' />
                        </a></Col>
                    <Col sm='4' className='text-center'><h5>Talk to Us</h5> <a
                        role='button'
                        className='btn btn-link  link'
                        href='tel:+12065551234'
                        style={{color:"white"}}
                    >
                        <i className='fa fa-phone' /> 1-206-555-1234
                    </a>
                        <br />
                        <a
                            role='button'
                            className='btn link'
                            href='mailto:notreal@notreal.co'
                            style={{color:"white"}}
                        >
                            <i className='fa fa-envelope-o ' /> campsites@nucamp.co
                        </a></Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer