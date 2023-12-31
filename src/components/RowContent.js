import React from "react";
import { Col, Row, Container } from "reactstrap";
import student from "../app/assets/img/studentReading.jpg";

const RowContent = () => {
  return (
    <Container className="row-content">
      <Row>
        <Col className="d-none d-md-block" sm="8" md="6">
          <div className="imageContainer">
            <img src={student} alt="Image 1" className="image" />
          </div>
          
        </Col>
        <Col sm="8" md="6" className="col-content">
          <h5 className="RowContenth5" >Welcome to ReadMe</h5>
        </Col>
      </Row>
    </Container>
  );
};

export default RowContent;
