import React from 'react';
import Group from './Group';
import styled from 'styled-components';

const SidemenuButtonUnstyled = ({ title, url, className }) => {
    return (
        <Group bottom>
            <div className={className}>
                <p>{title}</p>
            </div>
        </Group>
    )
}

const SidemenuButton = styled(SidemenuButtonUnstyled)`
box-sizing:border-box;
padding: 5px 15px 5px 15px;
&:hover {
    color: #F54E4E; 
    cursor:pointer;
    border-right: 5px solid #F54E4E;
}
`;

export default SidemenuButton;