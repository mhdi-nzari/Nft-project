import React from "react";
import { Col, Container, Row } from "reactstrap";
import Title from "@/shared/Title";
import NftCard from "@/components/ui/Nft-card/NftCard";
import { NFT__DATA } from "@/assets/data/data";

const Trending = () => {
  return (
    <section>
      <Container>
        <Row>
          <Title>Trending</Title>

          {NFT__DATA.slice(0, 8).map((item, index) => (
            <Col lg="3" md="4" sm="12" xs="12" key={item.id} className="mb-4">
              <NftCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Trending;
