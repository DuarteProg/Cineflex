import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function TelaSucesso(props) {

    const navigate = useNavigate();

    const { reserva } = props;
    const { filme, dia, horario, assentos, comprador } = reserva;
    console.log(dia)
    const numeroAssentos = [...assentos.values()];

    return (
        <Container>
            <h1>Order placed successfully</h1>
            <Informacoes>
                <h2>Movie and session</h2>
                <h3>{filme}</h3>
                <h4>{dia}  {horario}</h4>
            </Informacoes>
            <Informacoes2>
                <h2>Tickets</h2>
                {numeroAssentos.map(numero => <h3 key={numero}>
                    Seat {numero}</h3>)}
            </Informacoes2>
            <Informacoes3>
                <h2>Buyer</h2>
                <h3>Nome: {comprador.nome}</h3>
                <h3>CPF: {comprador.cpf}</h3>
            </Informacoes3>
            <Informacoes4>
                <button onClick={() => navigate("/")}>Back to home</button>
            </Informacoes4>
        </Container>
    )
}

const Container = styled.div`
h1{
    width: 374px;
height: 110px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 28px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.04em;
color: #247A6B;
}
`
const Informacoes = styled.div`
h4{
    width: 374px;
height: 20px;

font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 22px;
line-height: 26px;
display: flex;
align-items: center;
letter-spacing: 0.04em;
margin-left: 15px;
color: #293845;
}

h3{
    width: 374px;
height: 50px;

font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 22px;
line-height: 26px;
display: flex;
align-items: center;
letter-spacing: 0.04em;
margin-left: 15px;
color: #293845;
}
h2{
    width: 374px;
height: 90px;

font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 28px;
display: flex;
align-items: center;
margin-left: 25px;
letter-spacing: 0.04em;
color: #293845;
}
`
const Informacoes2 = styled.div`
h3{
    margin-left: 15px;
    width: 374px;
height: 25px;

font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 22px;
line-height: 26px;
display: flex;
align-items: center;
letter-spacing: 0.04em;

color: #293845;
}
h2{
    width: 374px;
height: 40px;
margin-left: 15px;
margin-top: 30px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 28px;
display: flex;
align-items: center;
letter-spacing: 0.04em;
color: #293845;

}
`
const Informacoes3 = styled.div`
h3{
    width: 374px;
height: 25px;
font-family: 'Roboto';
font-style: normal;
margin-left: 15px;
font-weight: 400;
font-size: 22px;
line-height: 26px;
display: flex;
align-items: center;
letter-spacing: 0.04em;

color: #293845;
}
h2{
    width: 374px;
height: 40px;
margin-left: 15px;
margin-top: 20px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 28px;
display: flex;
align-items: center;
letter-spacing: 0.04em;
color: #293845;
}
`
const Informacoes4 = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 40px;
button{
    width: 225px;
height: 42px;
left: 74px;
top: 622px;
display: flex;
align-items: center;
justify-content: center;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.04em;
background: #E8833A;
border-radius: 3px;
color: #FFFFFF;
}
`