import React from "react";
import styled from 'styled-components';
import { Container, Wrapper } from "./style";

const Feedback = () => {
    return (
        <StyledWrapper>
        <Container >
            <Title>
                <h4>
                    Thanks for taking up this assignment.
                </h4>
                <p>Anything you would like to add over here?</p>
            </Title>

            <FeedbackDiv>
                <p>
                    This is a trial fork
                </p>
            </FeedbackDiv>
            
        </Container>
        </StyledWrapper>
    )
}

export default Feedback

const StyledWrapper=styled(Wrapper)`
background:#FFFFFF;
`

const Title = styled.div`
h4{
    font-size:24px;
    color:#000000;
}
p{
    color:#000000;
    font-size:16px;
}
`
const FeedbackDiv= styled.div`
p{
    font-size:24px;
    color:#000000;
    
}
`
