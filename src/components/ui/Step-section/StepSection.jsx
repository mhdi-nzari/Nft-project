import React from "react";
import { Col, Container, Row } from "reactstrap";
import Title from "../../../shared/Title";
import { Link } from "react-router-dom";
import "./step-section.css";

const STEP__DATA = [
  {
    title: "Setup your Wallet",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nostrum aperiam natus possimus! Mollitia eveniet.",
    icon: "ri-wallet-line",
  },
  {
    title: "Create your Collection",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nostrum aperiam natus possimus! Mollitia eveniet.",
    icon: "ri-stack-line",
  },
  {
    title: "Add  your NFTs",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nostrum aperiam natus possimus! Mollitia eveniet.",
    icon: "ri-search-eye-line",
  },
  {
    title: "List Then  Far sale",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nostrum aperiam natus possimus! Mollitia eveniet.",
    icon: "ri-focus-2-line",
  },
];
const StepSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Title />

          
            {STEP__DATA.map((item, index) => (
              <Col lg="3" md="4" sm="6" key={index} className="mb-4">
                <div className="single__step__item">
                  <span className="my-4 d-inline-block">
                    <i className={item.icon}></i>
                  </span>
                  <div className="step__item__content">
                    <h5>
                      <Link to={"/wallet"}>{item.title}</Link>
                    </h5>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </Col>
            ))}
     
        </Row>
      </Container>
    </section>
  );
};

export default StepSection;
