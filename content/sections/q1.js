import React from "react";
import styled from 'styled-components';
import { Container, Wrapper } from "./style";

const Q1 = () => {
    return (
        <StyledWrapper>
            <Container >
                <Title>
                    <h3>
                        Change the following code from flex to grid keeping the design similar.
                    </h3>
                    <p>Create the component and attach an image of the code too below it.</p>
                </Title>
                <QuestionsDiv>
                    <FlexColumn>
                        <FlexRow>
                            <FlexItem>
                                1st
                            </FlexItem>
                            <FlexItem>
                                2nd
                            </FlexItem>
                        </FlexRow>
                        <FlexRow>
                            <FlexItem>
                                3rd
                            </FlexItem>
                            <FlexItem>
                                4th
                            </FlexItem>
                        </FlexRow>
                    </FlexColumn>
                </QuestionsDiv>
            </Container>
        </StyledWrapper>
    )
}

export default Q1

const StyledWrapper=styled(Wrapper)`
`

const Title = styled.div`
h3{
    font-size:32px;
}
p{
    font-size:16px;
}
`
const QuestionsDiv = styled.div`


`
const FlexColumn = styled.div`
display:flex;
flex-direction:column;
gap:20px;
`
const FlexRow = styled.div`
display:flex;
flex-direction:row;
gap:20px;
`
const FlexItem = styled.div`
padding:40px;
background:#000000;
border: 1px solid #FFFFFF;
border-radius: 20px;
`
