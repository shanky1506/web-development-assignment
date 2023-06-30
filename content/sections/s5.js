import React from "react";
import styled from 'styled-components';
import { Container } from "./style";

const S5 = () => {
    return (
        <Container >
            <Title>
                <h4>
                    Solution Here
                </h4>
                <p>Put the created component below this.</p>
            </Title>
            
        </Container>
    )
}

export default S5

const Title = styled.div`
h4{
    font-size:24px;
}
p{
    font-size:16px;
}
`
const QuestionsDiv= styled.div`
ul{
    display:flex;
    flex-direction:column;
}
li{
    font-size:20px;
}
`