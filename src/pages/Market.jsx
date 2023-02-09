import React, { useState } from "react";
import CommonSection from "@/components/ui/Common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";

import NFTCard from "@/components/ui/Nft-card/NftCard";

import { NFT__DATA } from "@/assets/data/data";

import "@/style/market.css";

const Market = () => {
  const handleCategory = () => {},
    handleItems = () => {},
    // ======== Sorting data by high , mid , low Rate  ========
    handleSort = (e) => {
      const filterValue = e.target.value;
      if (filterValue === "high-rate") {
        const filterData = NFT__DATA.filter((item) => item.currentBid >= 6 && item.currentBid);
        setData(filterData);
      }
      if (filterValue === "mid-rate") {
        const filterData = NFT__DATA.filter((item) => item.currentBid >= 5.50 && item.currentBid);
        setData(filterData);
      }
      if (filterValue === "low-rate") {
        const filterData = NFT__DATA.filter((item) => item.currentBid >= 4.89 && item.currentBid < 5.50);
        setData(filterData);
      }
    },
    [data, setData] = useState(NFT__DATA);

  return (
    <>
      <CommonSection title={"Marketplace"} />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <div className="market__product__filter d-flex align-items-center justify-content-between">
                <div className="filter__left d-flex align-items-center justify-content-center gap-5">
                  <div className="all__categorey__filter">
                    <select onChange={handleCategory} name="" id="">
                      <option>All Categories</option>
                      <option value="art">Art</option>
                      <option value="music">Music</option>
                      <option value="domain-name">Domain Name</option>
                      <option value="virtual-world">Virtual World</option>
                      <option value="trending-card">Trending Card</option>
                    </select>
                  </div>

                  <div className="all__items__filter">
                    <select onChange={handleItems} name="" id="">
                      <option>All Items</option>
                      <option value="single">Single</option>
                      <option value="bundle">Bundle</option>
                    </select>
                  </div>
                </div>
                <div className="filter__right">
                  <select onChange={handleSort} name="" id="">
                    <option>Sort By</option>
                    <option value="high-rate">High Rate</option>
                    <option value="mid-rate">Mid Rate</option>
                    <option value="low-rate">Low Rate</option>
                  </select>
                </div>
              </div>
            </Col>

            {data.map((item, index) => (
              <Col lg="3" md="4" sm="6" className="mb-4" key={index}>
                <NFTCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Market;
