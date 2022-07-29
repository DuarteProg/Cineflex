import axios from "axios"
import { useEffect, useState } from "react"


import "../assets/TelaInicial.css"
import Filme from "./Filme"

export default function TelaInicial() {
    const [filmes, setFilmes] = useState([])


    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promise.then((response) => {
            const { data } = response;
            setFilmes(data);
        });
        promise.catch((err) => {
            alert("Deu ruim na tela Inicial!")

        });
    }, [])

    return (
        <>
            <p>Select the movie</p>
            <div className="Cartaz">
                {
                    filmes.map((filme) => {
                        const { id, posterURL, title } = filme;
                        return <Filme
                            key={id}
                            id={id}
                            poster={posterURL}
                            titulo={title} />
                    })
                }
            </div>
        </>
    )
}