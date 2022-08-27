import React from 'react';
import styled from 'styled-components';
import Avatar from '../images/yardhi.jpg';

const Card = styled.div`
box-sizing: border-box;
border-radius:10px;
border: 2px solid rgba(207, 216, 220, 0.1);
overflow:hidden;
`

const CardHeader = styled.div`
box-sizing:border-box;
padding:10px 15px;
background: #536976;  /* fallback for old browsers */
background: linear-gradient(to right, #292E49, #536976);
height:200px;
`

const CardBody = styled.div`
box-sizing:border-box;
padding:10px 15px 10px 15px;
position:relative;
`

const AvatarFrame = styled.div`
box-sizing:border-box;
background-color:#888888;
border-radius:50%;
display:inline-block;
position:absolute;
overflow:hidden;
border : 2px solid rgba(245, 78, 78, 0.8);
width:170px;
height:170px;
top:-100px;
left:15px;
z-index:1;
`

const About = (props) => {
    return (
        <div>
            <h1 style={{ color: '#F54E4E' }}>About Me</h1>
            <Card>
                <CardHeader />
                <CardBody>
                    <AvatarFrame>
                        <img src={Avatar} alt="" style={{width:'220px',height:'auto',position:'relative',left:'-20px'}}/>
                    </AvatarFrame>
                    {/** content */}
                    <div style={{ marginTop: '100px' }}>
                        <h3 style={{ color: '#F54E4E' }} >M. Yardhi Zikra</h3>
                        <p>I love to code and making web applications.</p>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default About;