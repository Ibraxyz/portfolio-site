import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
box-sizing:border-box;
border-left:${props => props.left ? "2px solid rgba(207, 216, 220, 0.1)" : "none"};
border-top:${props => props.top ? "2px solid rgba(207, 216, 220, 0.1)" : "none"};
border-bottom:${props => props.bottom ? "2px solid rgba(207, 216, 220, 0.1)" : "none"};
border-right:${props => props.right ? "2px solid rgba(207, 216, 220, 0.1)" : "none"};
display:inline-block;
width:100%;
`;

const Group = ({ top, left, bottom, right, children }) => <Div top={top} left={left} bottom={bottom} right={right}>{children}</Div>

export default Group;
