import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
box-sizing:border-box;
border-left:5px solid rgba(0,0,0,0.5);
border-top:5px solid rgba(0,0,0,0.5);
border-bottom:5px solid rgba(0,0,0,0.5);
border-right:5px solid rgba(0,0,0,0.5);
padding:15px;
`;

const DivWithoutTop = styled.div`
box-sizing:border-box;
border-left:5px solid rgba(0,0,0,0.5);
border-top:none;
border-bottom:5px solid rgba(0,0,0,0.5);
border-right:5px solid rgba(0,0,0,0.5);
padding:15px;
`;

const DivWithoutBottom = styled.div`
box-sizing:border-box;
border-left:5px solid rgba(0,0,0,0.5);
border-top:5px solid rgba(0,0,0,0.5);
border-bottom:none;
border-right:5px solid rgba(0,0,0,0.5);
padding:15px;
`;

const DivWithoutLeft = styled.div`
box-sizing:border-box;
border-left:none;
border-top:5px solid rgba(0,0,0,0.5);
border-bottom:5px solid rgba(0,0,0,0.5);
border-right:5px solid rgba(0,0,0,0.5);
padding:15px;
`;

const DivWithoutRight = styled.div`
box-sizing:border-box;
border-left:5px solid rgba(0,0,0,0.5);
border-top:5px solid rgba(0,0,0,0.5);
border-bottom:5px solid rgba(0,0,0,0.5);
padding:15px;
border-right:none;
`;

const DivWithoutLeftAndRight = styled.div`
box-sizing:border-box;
border-left:none;
border-top:5px solid rgba(0,0,0,0.5);
border-bottom:5px solid rgba(0,0,0,0.5);
border-right:none;
padding:15px;
`;

const DivWithoutBottomAndTop = styled.div`
box-sizing:border-box;
border-left:5px solid rgba(0,0,0,0.5);
border-top:none;
border-bottom:none;
border-right:none;
padding:15px;
`;

const Group = ({top,left,bottom,right,children}) => {
    if(top === false){
        if(bottom === false){
            return <DivWithoutBottomAndTop>{children}</DivWithoutBottomAndTop>
        }
        return <DivWithoutTop/>
    }else if(bottom === false){
        if(top === false){
            return <DivWithoutBottomAndTop>{children}</DivWithoutBottomAndTop>
        }
        return <DivWithoutBottom/>
    }else if(left === false){
        if(right === false){
            return <DivWithoutLeftAndRight>{children}</DivWithoutLeftAndRight>
        }
        return <DivWithoutLeft/>
    }else if(right === false){
        if(left === false){
            return <DivWithoutLeftAndRight>{children}</DivWithoutLeftAndRight>
        }
        return <DivWithoutRight>{children}</DivWithoutRight>
    }else{
        return <Div>{children}</Div>
    }
}

export default Group;
