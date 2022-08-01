import { Link } from "react-router-dom";
import styled from "styled-components"

export default function Dia(props) {
    const {dia, data, sessoes} = props
return( 
    <Container>
<p>{dia} - {data}</p>
<ul>
{
    sessoes.map(sessao => {
        const {id, name} = sessao;
        return (
            <Botao>
            <Link key={id} to={`/assentos/${id}`}>
<button>{name}</button>
            </Link>
            </Botao>
        )
    })
}


</ul>
    </Container>
)
}

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
button {
    display: flex;
    
    flex-direction: row;
    width: 83px;
height: 43px;

background: #E8833A;
border-radius: 3px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.02em;

color: #FFFFFF;
}
`
const Botao = styled.div`
display: flex;
    flex-direction: row;
    justify-content: center;
    width: 83px;
height: 43px;
`