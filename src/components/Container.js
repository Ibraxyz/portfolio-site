import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
max-width:1440px;
margin:auto;
`

const Container = ({ children }) => <Div>{children}</Div>

export default Container;