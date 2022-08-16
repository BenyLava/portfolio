import React from 'react';
import { Container, Row, Col } from "reactstrap";

const Service = () => {
  const services = [
    { title : "New Home Design & Build", desc : "Complete design-build services with expert project management backed by new home warranties and dependable, local support." },
    { title : "Complete Home Renovations", desc : "Full structure gutting/re-design, second story additions, structural extensions, basement suites, exterior structures, and more." },
   /* { title : "", desc : "We assess or set up your testing processes. We can automate your manual tests or build you entire testing suites and strategies from the ground up." },
    { title : "Web Scraping", desc : "We build you a custom web crawler/scraper, to automatically pull information from your desired web source and immediately deliver it to you through whatever medium and in whatever format you want. A dashboard on a private web app, .csv files via email... we'll send you a carrier pidgeon with parchment if you foot the bill for its training." },
    { title : "Web Hosting and Maintenance", desc : "Let us host and maintain your web site or service. We'll configure the automatic monitoring of whatever usage information you need to see." },
    { title : "Security, Performance, and User-Experience Audits", desc : "From quick, broad-spectrum testing against known vulnerabilities, benchmarks, and best practices - to meeting to consult, assess, and bolster your site's performance and looks, as well as your cybersecurity policies and processes." }*/
  ]
  
  return (
    <section className="section" id="service">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mt-5 mb-5">
              <h3 className="font-weight-medium text-dark"><span className="text-violet">Services</span></h3><br/>
              <p className="text-dark">Below summarizes our operations, but doesn't cover everything. Feel free to ask about any other contracting or construction service you need.<br/><br/>Our network of contractors, project managers, and labourers can find the ideal solution for any obstacle.</p>
            </div>
          </Col>
        </Row>
        <Row>
          {
            services.map((service, key) =>
              <Col key={key} lg={4} md={6}>
                <div>
                  <div className="mb-5">
                      <i className={service.icon}></i>
                  </div>
                  <h5 className="text-violet text-center font-weight-medium pt-1 mb-4">{service.title}</h5>
                  <p className="text-dark text-center mb-4">{service.desc}</p>
                </div>
              </Col>
            )
          }
        </Row>
      </Container>
    </section>
  );
}

export default Service;