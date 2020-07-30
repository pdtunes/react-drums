import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: #444;
  border-radius: 3px;
  padding: 1rem;
  border: none;
  height: 68px;
  width: 100%;
  cursor: pointer;
  box-shadow: -2px 2px 2px rgba(0, 0, 0, 0.4);
`;

const Pad = () => <Button>.</Button>;

export default Pad;
