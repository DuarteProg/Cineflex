import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import styled from "styled-components"

import Assento from "./Assento";

export default function TelaAssentos() {
    const { sessaoId } = useParams();
    const URL = `https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${sessaoId}/seats`
    
    const [ sessao, setSessao] = useState(null);
    // const [assentosSelecionados, setAssentosSelecionados] = useState([]);

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

function toggle(id, numero){

}


    return (
        <Container>
        <p>Select The Seats</p>
        <Assentos>
            {
                sessao?.seats.map((seat) => {
                    const {id, name, isAvailable} = seat;
return <Assento  
key={id}
id={id}
numero={name} 
disponivel={isAvailable}
selecionado={false}
aoSelecionar={(id, numero) => toggle(id, numero)}
/>
                })
            }
        </Assentos>


{/* <FormularioCompra onSubmit={confirmarCompra}>
<label htmlFor="nome">Nome do comprador:</label>
<input type="text" id="nome" placeholder="Digite seu nome..." required
onChange={(e) => setDadosCompra({ ...dadosCompra, nome: e.target.value})}
 />
 <label htmlFor="cpf">CPF do comprador:</label>
<input type="text" id="cpf" placeholder="Digite seu CPF..." required
onChange={(e) => setDadosCompra({ ...dadosCompra, cpf: e.target.value})} 
/>
<div>
    <button>Book Seat</button>
</div>
</FormularioCompra> */}
{/* <Footer>

</Footer> */}
        </Container>
        )
}

const Container = styled.div`

`
// const FormularioCompra = styled.div`
// `
// const Footer = styled.div`

// `

const Assentos = styled.div`
display: flex;
flex-wrap: wrap;
width: 374px;
height: 20px;

`
