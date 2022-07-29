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
            <Link key={id} to={`/assentos/${id}`}>
<button>{name}</button>
            </Link>
        )
    })
}


</ul>
    </Container>
)
}

const Container = styled.div`
button {
    display: flex;
    
}
`