import React from 'react';
import Group from './Group';
import styled from 'styled-components';

const SidemenuButton = ({title,url}) => {
    return (
        <Group bottom>
            <div style={{ boxSizing: 'border-box', padding: '15px' }}>
                <p>{title}</p>
            </div>
        </Group>
    )
}

export default SidemenuButton;