import React from 'react';
import Group from './Group';
import styled from 'styled-components';

const SidemenuButtonUnstyled = ({ title, url, className }) => {
    return (
        <Group bottom>
            <div style={{ boxSizing: 'border-box', padding: '15px' }} className={className}>
                <p>{title}</p>
            </div>
        </Group>
    )
}

const SidemenuButton = styled(SidemenuButtonUnstyled)`
&:hover {
    color: #F54E4E; 
    cursor:pointer;
}
`;

export default SidemenuButton;