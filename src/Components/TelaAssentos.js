import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import styled from "styled-components"

import Assento from "./Assento";

export default function TelaAssentos() {
    const { sessaoId } = useParams();
    const URL = `https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${sessaoId}/seats`

    const [sessao, setSessao] = useState(null);
    const [assentosSelecionados, setAssentosSelecionados] = useState(new Map());
    const [dadosCompra, setDadosCompra] = useState({ nome: "", cpf: "" });


    console.log(assentosSelecionados)

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

    function confirmarCompra(event){
        event.preventDefault();
const URL = `https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many`;
const promise = axios.post(URL, {
    ids: [...assentosSelecionados.keys()],
    nome: dadosCompra.nome,
    cpf: dadosCompra.cpf
});
promise.then((response) => {
    
})
console.log(assentosSelecionados, dadosCompra);

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
                /> <br/>
                <label htmlFor="cpf">CPF do comprador:</label> 
                <input type="text" id="cpf" placeholder="Digite seu CPF..." required
                    onChange={(e) => setDadosCompra({ ...dadosCompra, cpf: e.target.value })}
                />
                <div>
                    <button>Book Seat</button>
                </div>
                </form>
            </FormularioCompra>



        </Container>
    )
}

const Container = styled.div`

`


const FormularioCompra = styled.div`
margin-top: 60px;
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
