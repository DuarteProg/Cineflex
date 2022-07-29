import styled from "styled-components"

export default function Headers() {
    return (
        <Titulo>
            <h1>CINEFLEX</h1>
        </Titulo>
    )
}

const Titulo = styled.div`
width: 375px;
height: 67px;
background: #C3CFD9;

h1 {
width: 375px;
height: 67px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 34px;
line-height: 40px;
display: flex;
align-items: center;
justify-content: center;
color: #E8833A;
font-family: 'Roboto', sans-serif;
}
`