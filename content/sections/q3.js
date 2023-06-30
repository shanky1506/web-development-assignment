import React from "react";
import styled from 'styled-components';
import { Container, Wrapper } from "./style";
import dropdown from "../images/dropdown-trial.png"

const Q3 = () => {
    return (
        <StyledWrapper>
            <StyledContainer >
                <Title>
                    <h3>
                        Create the following dropdown from the image and put it on the left side.
                    </h3>
                </Title>
                <QuestionsGrid>
                    <AnswerDiv>
                        <h4>Have the created component here</h4>
                        {/* <img src={your code} alt="code" /> */}
                    </AnswerDiv>
                    <ImageDiv>
                        <img src={dropdown} alt="dropdown" />
                    </ImageDiv>
                </QuestionsGrid>
            </StyledContainer>
        </StyledWrapper>
    )
}

export default Q3

const StyledWrapper=styled(Wrapper)`
`
const Title = styled.div`
margin-bottom:40px;
h3{
    font-size:32px;
}
`
const QuestionsGrid = styled.div`
display:grid;
grid-template-columns: 1fr 1fr;
grid-gap:20px;
`
const StyledContainer = styled(Container)`
margin-top:0;
`
const ImageDiv = styled.div`
img{
    width:300px;
}
`
const AnswerDiv = styled.div`
h4{
    font-size:16px;
}
border-right: 1px solid #FFFFFF;
`