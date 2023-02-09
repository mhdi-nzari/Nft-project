import React, { useRef } from "react";
import CommonSection from "@/components/ui/Common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";

const Contact = () => {

  const nameRef = useRef(""),
  emailRef = useRef(""),
  subjectRef = useRef(""),
  messageRef = useRef("");
  const handleSubmit = (e) => {


    e.preventDefault();
  };
  return (
    <>
      <CommonSection tiltle="Contact" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" className="m-auto text-center">
              <h2>Drop a Message</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tenetur hic sed eos perspiciatis dolorum quas doloremque magnam
                iste, harum voluptatem vitae repellendus voluptas laudantium
                beatae aliquid cum, officiis commodi perferendis?
              </p>
              <div className="contact mt-4">
                <form onSubmit={handleSubmit}>
                  <div className="form__input">
                    <input
                      type="text"
                      placeholder="Enter your Name"
                      ref={nameRef}
                    />
                  </div>
                  <div className="form__input">
                    <input type="text" placeholder="Enter your Email"    ref={emailRef}/>
                  </div>
                  <div className="form__input">
                    <input type="text" placeholder="Enter your Subject" ref={subjectRef} />
                  </div>
                  <div className="form__input">
                    <textarea
                      rows="7"
                      placeholder="Write message"
                      className=" w-100"
                      ref={messageRef}
                    ></textarea>
                  </div>

                  <button className="send__btn">Send a Message</button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;
