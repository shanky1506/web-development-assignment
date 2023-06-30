import React from "react";
import styled from 'styled-components';
import { Container, Wrapper } from "./style";
import flex from "../images/flex-trial.png"

const Q4 = () => {
    return (
        <StyledWrapper>
            <StyledContainer >
                <Title>
                    <h3>
                        Paste the above created dropdown here on the left and add an image on the right. <br />
                        Write a code such that selecting an option in the dropdown changes the image.
                    </h3>
                    <p>You can use upto 3 options here. Images can be used from the images folder, or you can add your own.</p>
                </Title>
                <QuestionsGrid>
                    <ImageDiv>
                        <h4>
                            Doropdown here
                        </h4>
                    </ImageDiv>
                    <CodeDiv>
                        <h4>Have the Image here</h4>
                        {/* <img src={your image} alt="image" /> */}
                    </CodeDiv>
                </QuestionsGrid>
            </StyledContainer>
        </StyledWrapper>
    )
}

export default Q4

const StyledWrapper = styled(Wrapper)`
background:#FFFFFF;
`
const Title = styled.div`
margin-bottom:40px;
h3{
    font-size:32px;
    color:#000000;
}
p{
    font-size:16px;
    color:#000000;
}
`
const QuestionsGrid = styled.div`
padding: 30px 0;
display:grid;
grid-template-columns: 1fr 1fr;
grid-gap:20px;
`
const StyledContainer = styled(Container)`
margin-top:0;
`
const ImageDiv = styled.div`
h4{
    font-size:16px;
    color:#000000;
    margin: 1rem 0 1rem;
}
img{
    width:300px;
}
border-right: 1px solid #000000;
`
const CodeDiv = styled.div`
h4{
    font-size:16px;
    color:#000000;
    margin: 1rem 0 1rem;
}
img{
    width:300px;
}
`