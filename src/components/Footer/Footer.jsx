import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import "./footer.css";

const MY__ACCOUNT = [
  {
    display: "Author Profile",
    url: "/seler-profile",
  },
  {
    display: "Create Item",
    url: "/create",
  },
  {
    display: "Collection",
    url: "/market",
  },
  {
    display: "Edit Profile",
    url: "/edit-profile",
  },
];

const RESOURCES = [
  {
    display: "Help Center",
    url: "/#",
  },
  {
    display: "Partner",
    url: "#",
  },
  {
    display: "Community",
    url: "#",
  },
  {
    display: "Activity",
    url: "#",
  },
];
const COMPANY = [
  {
    display: "About",
    url: "#",
  },
  {
    display: "Career",
    url: "#",
  },
  {
    display: "Ranking",
    url: "#",
  },
  {
    display: "Contact Us",
    url: "/contact",
  },
];

const index = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="6" sm="6" className="mb-4">
            <h2 className="d-flex gap-2 align-items-center">
              <span>
                <i className="ri-fire-fill"></i>
              </span>
              NFTs
            </h2>

            <p className="">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam,
              minima aliquam. Enim, delectus perferendis numquam dolore
              consectetur libero saepe sequi rerum alias accusantium, laborum
              ipsam tempora voluptas dolorem pariatur non?
            </p>
          </Col>

          <Col lg="2" md="3" sm="6">
            <h5>My Accounts</h5>
            <ListGroup>
              {MY__ACCOUNT.map((item, index) => (
                <ListGroupItem key={index} className="list__item">
                  <Link to={item.url}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="2" md="3" sm="6">
            <h5>Resources</h5>
            {RESOURCES.map((item, index) => (
              <ListGroupItem key={index} className="list__item">
                <Link to={item.url}>{item.display}</Link>
              </ListGroupItem>
            ))}
          </Col>
          <Col lg="2" md="3" sm="6">
            <h5>Company</h5>
            {COMPANY.map((item, index) => (
              <ListGroupItem key={index} className="list__item">
                <Link to={item.url}>{item.display}</Link>
              </ListGroupItem>
            ))}
          </Col>

          <Col lg="3" md="6" sm="6">
            <h5>NewsLetter</h5>
            <input type="text" className="newsletter" placeholder="Email" />
            <div className="social__links d-flex gap-3 align-items-center ">
              <span>
                <Link to="#">
                  <i className="ri-facebook-line"></i>
                </Link>
              </span>
              <span>
                <Link to="#">
                  <i className="ri-instagram-line"></i>
                </Link>
              </span>
              <span>
                <Link to="#">
                  <i className="ri-telegram-line"></i>
                </Link>
              </span>
              <span>
                <Link to="#">
                  <i className="ri-linkedin-fill"></i>
                </Link>
              </span>
              <span>
                <Link to="#">
                  <i className="ri-facebook-line"></i>
                </Link>
              </span>
            </div>
          </Col>

          <Col lg="12" className="mt-5 text-center">
            <p className="copyRight">
              Copyright 2022 , Developer By{" "}
              <a href="http://mahdi-nazari.ir" className="mx-2 d-inline-block">
                mahdi nazari
              </a>
              | All Right Reversed ©{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default index;
