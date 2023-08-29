import React from "react";
import { Col, Row, Container } from "reactstrap";
import student from "../app/assets/img/studentReading.jpg";

const RowContent = () => {
  return (
    <Container className="row-content">
      <Row>
        <Col sm="8" md="6" className="imageGrid">
          <div className="imageContainer">
            <img src={student} alt="Image 1" className="image" />
          </div>
          <div className="imageContainer">
            <img src={student} alt="Image 2" className="image" />
          </div>
          <div className="imageContainer">
            <img src={student} alt="Image 3" className="image" />
          </div>
          <div className="imageContainer">
            <img src={student} alt="Image 4" className="image" />
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
