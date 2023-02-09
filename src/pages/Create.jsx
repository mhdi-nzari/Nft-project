import React from "react";
import { Col, Container, Row } from "reactstrap";
import CommonSection from "@/components/ui/Common-section/CommonSection";
import NftCard from "@/components/ui/Nft-card/NftCard";
import '@/style/create-items.css'
import img from "@/assets/images/img-01.jpg";
import ava01 from "@/assets/images/ava-01.png";
const item = {
  id: "03",
  title: "Civilian",
  desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam adipisci cupiditate officia, nostrum et deleniti vero corrupti facilis minima laborum nesciunt nulla error natus saepe illum quasi ratione suscipit tempore dolores. Recusandae, similique modi voluptates dolore repellat eum earum sint.",
  imgUrl: img,
  creator: "Trista Francis",
  creatorImg: ava01,
  currentBid: 6.89,
};
const Create = () => {
  return (
    <>
      <CommonSection title="Create Nft" />
      <section>
        <Container>
          <Row>
            <Col lg="3" md="4" sm="6">
              <h5 className="mb-4 text-light">Preview Item</h5>
              <NftCard item={item}  />
            </Col>

            <Col lg="9" md="8" sm="6">
              <div className="create__item">
                <form action="">
                  <div className="form__input">
                    <label htmlFor="">Upload File</label>
                    <input type="file" className="upload__input" />
                  </div>
                  <div className="form__input">
                    <label htmlFor="">Price</label>
                    <input
                      type="number"
                      placeholder="Enter price for one item (ETH)"
                    />
                  </div>
                  <div className="form__input">
                    <label htmlFor="">Minimum Bid</label>
                    <input type="number" placeholder="Enter minimum bid" />
                  </div>

                  <div className="d-flex align-items-center justify-content-center gap-5">
                    <div className="form__input w-50">
                      <label htmlFor="">Starting Date</label>
                      <input type="date" />
                    </div>

                    <div className="form__input w-50">
                      <label htmlFor="">Exporation Date</label>
                      <input type="date" />
                    </div>
                  </div>

                  <div className="form__input">
                    <label htmlFor="">Title</label>
                    <input type="text" placeholder="Enter Title" />
                  </div>

                  <div className="form__input">
                    <label htmlFor="">Description</label>
               <textarea name="" placeholder="Enter Description" id="" rows="10" className="w-100"></textarea>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Create;
