import React from "react";
import styled from "styled-components";
const Header = styled.h1`
  font-size: 1.2rem;
  line-height: 2rem;
  font-weight: 700;
  letter-spacing: -0.05em;
  line-height: 1;
  max-width: 64rem;
  color: white;
  padding: 12px;

  @media (min-width: 768px) {
    font-size: 3rem;
    line-height: 1;
  }
  @media (min-width: 1024px) {
    font-size: 3.75rem;
    line-height: 1;
    max-width: 80rem;
  }
`;

function TextEmpty({ text }) {
  return <Header> {text}</Header>;
}

export default TextEmpty;
