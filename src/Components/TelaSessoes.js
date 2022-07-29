import { useParams } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

import "../assets/Telasessoes.css"
import Dia from "./Dia";


export default function TelaSessoes() {
  const {filmeId} = useParams(); 
const URL = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${filmeId}/showtimes`


const [filme, setFilme] = useState(null)
useEffect(() => {
    const promise = axios.get(URL);
       promise.then((response) => {
        const {data} = response;
        console.log(data)
        setFilme(data);
       });
       promise.catch(() => {
        alert("Deu ruim na tela Sessoes!")
    
    });
}, []);


    return(
        <>
        <h1>Select Time</h1>
        <Container>
          {
filme?.days.map((dia) => { 
    const {weekday, date, showtimes, id} = dia;
    return <Dia 
    key={id}
    dia={weekday}
    data={date}
    sessoes={showtimes}
    id={id} />

})
          }
          <h2>footer</h2>





          </Container>
          </>
    )
        }

        const Container = styled.div`
        `