import React from "react";

import styled from "styled-components";
import { Col } from "reactstrap";

const Title = ({ children }) => {
  const Title = styled.h1`
    color: white;
  `;
  return (
    <Title>
      <Col lg="12" className="mb-5">
        <h3>Create and sell Your NTFS</h3>
      </Col>
    </Title>
  );
};

export default Title;
