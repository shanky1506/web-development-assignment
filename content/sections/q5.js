import React from "react";
import styled from 'styled-components';
import { Container, Wrapper } from "./style";
import component from "../images/component-trial.png"

const Q5 = () => {
    return (
        <StyledWrapper>
            <Container >
                <Title>
                    <h4>
                        Additional question * (for fun)
                    </h4>
                    <h3>
                        Try to recreate the following component and display it below.
                    </h3>
                    <p>You can make use of the figma file for this. <a href="https://www.figma.com/file/HxNZcchT8DOI1UmMQY52Hb/Web-Development-Assignment?type=design&node-id=1-4&mode=design&t=BFbRQwTqbP479xam-4" target="_blank" > Click here </a> </p>
                </Title>
                <QuestionsDiv>
                    <img src={component} alt="component" />
                </QuestionsDiv>
            </Container>
        </StyledWrapper>
    )
}

export default Q5

const StyledWrapper=styled(Wrapper)`
`

const Title = styled.div`
h4{
    font-size:24px;
}
h3{
    font-size:32px;
}
p{
    font-size:16px;
}
`
const QuestionsDiv = styled.div`
img{
    width:100%;
}

`
