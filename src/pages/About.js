import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
box-sizing: border-box;
border-radius:10px;
border: 2px solid rgba(207, 216, 220, 0.1);
overflow:hidden;
`

const CardHeader = styled.div`
box-sizing:border-box;
padding:10px 15px;
background-color:black;
height:200px;
`

const CardBody = styled.div`
box-sizing:border-box;
padding:80px 15px 10px 15px;
`

const AvatarFrame = styled.div`
box-sizing:border-box;
border-raadius:50%;
overflow:hidden;
border : 2px solid rgba(207, 216, 220, 0.1);
`

const About = (props) => {
    return (
        <div>
            <h1 style={{ color: '#F54E4E' }}>About Me</h1>
            <Card>
                <CardHeader />
                <AvatarFrame/>
                <CardBody>
                    <h3 style={{ color: '#F54E4E' }} >M. Yardhi Zikra</h3>
                    <p>I love to code and making web applications.</p>
                </CardBody>
            </Card>
        </div>
    )
}

export default About;