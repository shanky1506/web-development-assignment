import React from "react";
import styled from 'styled-components';
import { Container, Wrapper } from "./style";

const Question = () => {
    return (
        <StyledWrapper>
            <StyledContainer >
                <Title>
                    <h3>
                        Lets Begin
                    </h3>
                </Title>
                <QuestionsDiv>
                    <ul>
                        <li>Find the title "WD Internship" and replace it with your first name</li>
                        <li>Attach your resume and add it to the resume button in the nav bar.(or) Create a button similar to the style of button above, put it under this question and attach the resume to it.</li>
                        <li>Make the changes in the components below as mentioned</li>
                    </ul>
                </QuestionsDiv>
            </StyledContainer>
        </StyledWrapper>
    )
}

export default Question

const StyledWrapper=styled(Wrapper)`
background:#FFFFFF;
`
const Title = styled.div`
h3{
    font-size:32px;
    color:#000000;
}
`
const QuestionsDiv = styled.div`
ul{
    display:flex;
    flex-direction:column;
}
li{
    font-size:20px;
    color:#000000;
}
`
const StyledContainer = styled(Container)`
margin-top:0;
`