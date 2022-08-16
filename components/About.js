import React from 'react';
import { Container, Row, Col } from "reactstrap";


const About = () => {

  return (
    <section className="section mt-5" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5 mt-5">
              <h3 className="font-weight-normal text-dark">About <span className="text-green font-weight-bold">Raven Contracting</span></h3>
              <p className="text-dark">Raven Contracting is a fully licensed general contractor company based in Revelstoke BC, since 20xx. We are a passionate and reliable team, building top-quality energy-efficient homes. We offer custom home building, renovations and general contracting services. Our team is dedicated to doing a few projects at a time, offering the flexibility and focus your project deserves.  </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h2 className="font-weight-light text-center line-height-1_6 text-dark mb-4">General Contracting from people who care</h2>
          </Col>
          <Col md={{ size:7, offset :1 }}>
            <Row>
              <Col md={6}>
                <h6 className="text-dark font-weight-normal text-center f-20 mb-3">Our Mission</h6>
                <p className="text-dark text-center font-weight-light">Provide quality custom built homes and trustworthy contracting for a fair price.</p>
              </Col>
              <Col md={6}>
                <h6 className="text-dark font-weight-normal text-center f-20 mb-3">Our Vision</h6>
                <p className="text-dark text-center font-weight-light">lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;