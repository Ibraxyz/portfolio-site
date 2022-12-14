import React from "react";
import styled from 'styled-components';

const Btn = styled.button`
  color: palevioletred;
  font-size: 1em;
  padding: 0.25em 1em;
  border:none;
  background:none;
	outline:none;
`;

const Button = ({children}) => <Btn>{children}</Btn>

export default Button;