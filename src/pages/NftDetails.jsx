import React from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import CommonSection from "../components/ui/Common-section/CommonSection";
import { NFT__DATA } from "@/assets/data/data";
import LiveAuction from "@/components/ui/Live-auction/LiveAuction";
import "@/style/nft-details.css";

const NftDetails = () => {
  const { id } = useParams(),
    singleNft = NFT__DATA.find((item) => item.id === id);
  return (
    <>
      <CommonSection title={singleNft.title} />

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6" className="mb-5">
              <img
                src={singleNft.imgUrl}
                alt="image"
                className="w-100 single__nft-img"
              />
            </Col>

            <Col lg="6" md="6" sm="6">
              <div className="single__nft__content">
                <h2 className="mb-3">{singleNft.title}</h2>
                <div className="d-flex align-content-center justify-content-between mb-4">
                  <div className="d-flex align-items-center gap-4 single__nft-seen ">
                    <span>
                      <i className="ri-eye-line"></i>
                      234
                    </span>
                    <span>
                      <i className="ri-heart-line"></i>
                      123
                    </span>
                  </div>
                  <div className="d-flex align-items-center gap-2 single__nft-more ">
                    <span>
                      <i className="ri-send-plane-line"></i>
                    </span>
                    <span>
                      <i className="ri-more-2-line"></i>
                    </span>
                  </div>
                </div>

                <div className="nft__creator d-flex gap-3 align-items-center">
                  <div className="creator__img">
                    <img
                      src={singleNft.creatorImg}
                      alt="img"
                      className="w-100"
                    />
                  </div>

                  <div className="creator__detail">
                    <p>Created By</p>
                    <h6>{singleNft.creator}</h6>
                  </div>
                </div>

                <p className="my-4">{singleNft.desc}</p>
                <button className="singleNft-btn d-flex  align-items-center justify-content-center gap-2 w-100">
                  <i className="ri-shopping-bag-3-line"></i>

                  <Link to="/wallet">Place a Bid</Link>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <LiveAuction />
    </>
  );
};

export default NftDetails;
