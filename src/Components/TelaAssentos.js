import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import styled from "styled-components"

import Assento from "./Assento";

export default function TelaAssentos(props) {
    const { sessaoId } = useParams();
    const { finalizar } = props;
    const navigate = useNavigate();

    const URL = `https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${sessaoId}/seats`

    const [sessao, setSessao] = useState(null);
    const [assentosSelecionados, setAssentosSelecionados] = useState(new Map());
    const [dadosCompra, setDadosCompra] = useState({ nome: "", cpf: "" });


    useEffect(() => {
        const promise = axios.get(URL);
        promise.then(response => {
            const { data } = response;

            setSessao(data)
        });
        promise.catch(() => {
            alert("Deu ruim na tela Assentos!")

        });
    }, [])

    function toggle(id, numero) {
        const jaSelecionado = assentosSelecionados.has(id);
        if (jaSelecionado) {
            assentosSelecionados.delete(id);
            setAssentosSelecionados(new Map(assentosSelecionados))
        } else {
            setAssentosSelecionados(new Map(assentosSelecionados.set(id, numero)));
        }
    }

    function confirmarCompra(event) {
        event.preventDefault();
        const URL = `https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many`;
        const promise = axios.post(URL, {
            ids: [...assentosSelecionados.keys()],
            nome: dadosCompra.nome,
            cpf: dadosCompra.cpf
        });
        promise.then((response) => {
            finalizar({
                filme: sessao.movie.title,
                dia: sessao.day.date,
                horario: sessao.day.weekday,
                assentos: assentosSelecionados,
                comprador: dadosCompra
            });
            navigate("/sucesso")
        })

    }


    return (
        <Container>
            <p>Select The Seats</p>
            <Assentos>
                {
                    sessao?.seats.map((seat) => {
                        const { id, name, isAvailable } = seat;
                        const selecionado = assentosSelecionados.has(id);
                        return <Assento
                            key={id}
                            id={id}
                            numero={name}
                            disponivel={isAvailable}
                            selecionado={selecionado}
                            aoSelecionar={(id, numero) => toggle(id, numero)}
                        />
                    })
                }
            </Assentos>


            <Legenda>
                <div>
                    <h4></h4>
                    <h2>Selected</h2>
                </div>

                <div>
                    <h5></h5>
                    <h2>Available</h2>
                </div>

                <div>
                    <h6></h6>
                    <h2>Unavailable</h2>
                </div>
            </Legenda>



            <FormularioCompra>
                <form onSubmit={confirmarCompra}>
                    <label htmlFor="nome">Nome do comprador:</label>
                    <input type="text" id="nome" placeholder="Digite seu nome..." required
                        onChange={(e) => setDadosCompra({ ...dadosCompra, nome: e.target.value })}
                    /> <br />
                    <label htmlFor="cpf">CPF do comprador:</label>
                    <input type="text" id="cpf" placeholder="Digite seu CPF..." required
                        onChange={(e) => setDadosCompra({ ...dadosCompra, cpf: e.target.value })}
                    />
                    <Botao>
                        <button>Book Seat</button>
                    </Botao>
                </form>
            </FormularioCompra>
            <Footer>
                <img src={sessao?.movie.posterURL} alt={sessao?.movie.title} />
                <Footer2>
                    <p>{sessao?.movie.title}</p>
                    <p>{sessao?.day.weekday} - {sessao?.name}</p>
                </Footer2>
            </Footer>
        </Container>
    )
}


const Container = styled.div`
p{
    width: 374px;
height: 110px;
left: 0px;
top: 67px;

font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 28px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.04em;

color: #293845;
}

`
const Botao = styled.div`
 display: flex;
 width: 374px;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    margin-top: 10px;
    
    button{
        width: 225px;
height: 42px;
left: 72px;
top: 688px;

font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
letter-spacing: 0.04em;
background: #E8833A;
border-radius: 3px;
    }
`

const FormularioCompra = styled.div`
margin-top: 60px;

`
const Footer = styled.div`
display: flex;
align-items: center;
width: 375px;
height: 117px;
left: 0px;
bottom: 0px;

background: #DFE6ED;
border: 1px solid #9EADBA;

img{
    width: 64px;
height: 89px;
margin-left: 14px;
}
`
const Footer2 = styled.div`
width: 287px;
height: 89px;
left: 88px;
bottom: 14px;

font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 26px;
line-height: 30px;
display: flex;
align-items: center;

color: #293845;
`

const Legenda = styled.div`
margin-top: 240px;
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
width: 374px;
height: 20px;


h4 { 
width: 25px;
height: 25px;
background: #8DD7CF;
border: 1px solid #1AAE9E;
border-radius: 17px;
margin-left: 15px;
margin-bottom: 1px;
}

h5 {
width: 24px;
height: 24px;
left: 178px;
top: 377px;

background: #C3CFD9;
border: 1px solid #7B8B99;
border-radius: 17px;
margin-left: 20px;
margin-bottom: 1px;
}

h6 {
    width: 24px;
height: 24px;
left: 271px;
top: 377px;

background: #FBE192;
border: 1px solid #F7C52B;
border-radius: 17px;
margin-left: 30px;
margin-bottom: 1px;
}
`

const Assentos = styled.div`
display: flex;
flex-wrap: wrap;
width: 374px;
height: 20px;

`
