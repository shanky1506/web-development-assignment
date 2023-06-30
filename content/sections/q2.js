import React from "react";
import styled from 'styled-components';
import { Container, Wrapper } from "./style";
import flex from "../images/flex-trial.png"

const Q2 = () => {
    return (
        <StyledWrapper>
            <StyledContainer >
                <Title>
                    <h3>
                        Create the following component from the image with html, css. and put it on the right side.
                    </h3>
                </Title>
                <QuestionsGrid>
                    <ImageDiv>
                        <img src={flex} alt="flex" />
                    </ImageDiv>
                    <CodeDiv>
                        <h4>Have the created component here</h4>
                        {/* <img src={your code} alt="code" /> */}
                    </CodeDiv>
                </QuestionsGrid>
            </StyledContainer>
        </StyledWrapper>
    )
}

export default Q2

const StyledWrapper=styled(Wrapper)`
background:#FFFFFF;
`
const Title = styled.div`
margin-bottom:40px;
h3{
    font-size:32px;
    color:#000000;
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
border-right: 1px solid #000000;
`
const CodeDiv = styled.div`
h4{
    font-size:16px;
    color:#000000;
}
`