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
        <Header>
        <h1>Select Time</h1>
        </Header>
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
    
          <Footer>
          <img src={filme?.posterURL} alt={filme?.title}></img>
          <h1>{filme?.title}</h1>
          </Footer>




          </Container>
          </>
    )
        }

        // function montarFooter() {
        //     if(filme !== null) {
        //       const {posterURL, title} = filme;
        //       return (
        //         <>
        //           <img src={posterURL} alt={title} />
        //           <h1>{title}</h1>
        //         </>
        //       )
        //     }
        
        //     return <></>;
        //   }

        const Container = styled.div`
        `
        const Footer = styled.div`
       display: flex;
       align-items: center;
       margin-top: 10px;
       width: 374px;
       img {
            width: 48px;
height: 72px;
        }
        margin-left: 10px;

        h1{
            width: 374px;
height: 40px;
margin-left: 10px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 26px;
line-height: 30px;
display: flex;
align-items: center;

color: #293845;
        }
        `
        const Header = styled.div`
        width: 374px;
height: 110px;
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
        `