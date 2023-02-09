import { Col, Container, Row } from "reactstrap";
import ava01 from "@/assets/images/ava-01.png";
import "./seller-section.css";
import Title from "../../../../shared/Title";
import { SELLER__DATA } from "@/assets/data/data";
const SellerSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="seller__section__title">
              <Title>Top Sellers</Title>
            </div>
          </Col>

          {SELLER__DATA.map((item, index) => (
            <Col lg="2" md="3" sm="4" xs="6" key={index} className="mb-5">
              <div className="single__selere-card d-flex align-items-center  gap-3">
                <div className="seller__img">
                  <img src={item.sellerImg} alt="img-brand" className="w-100" />
                </div>
                <div className="seller__content">
                  <h6>{item.sellerName}</h6>
                  <h6>{item.currentBid}ETH</h6>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default SellerSection;
