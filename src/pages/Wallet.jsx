import React from "react";

import CommonSection from "@/components/ui/Common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import "@/style/wallet.css";

const wallet__data = [
  {
    title: "Bitcoin",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab laudantium, nisi voluptas dolore incidunt",
    icon: "ri-bit-coin-line",
  },
  {
    title: "Metamask",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab laudantium, nisi voluptas dolore incidunt",
    icon: "ri-coin-line",
  },
  {
    title: "Authereum",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab laudantium, nisi voluptas dolore incidunt",
    icon: "ri-money-dollar-circle-line",
  },
  {
    title: "ETH",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab laudantium, nisi voluptas dolore incidunt",
    icon: "ri-currency-line",
  },
];
const Wallet = () => {
  return (
    <>
      <CommonSection title="Connect Wallet" />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <div className="w-50 m-auto">
                <h3 className="text-light">Connect your Wallet</h3>
                <p></p>
              </div>
            </Col>

            {wallet__data.map((item, index) => (
              <Col lg="3" md="6" sm="12">
                <div className="wallet__item" key={index}>
                  <span>
                    <i className={item.icon}></i>
                  </span>
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

    </>
  );
};

export default Wallet;
