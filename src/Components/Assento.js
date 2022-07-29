import styled from "styled-components";


export default function Assento(props) {
    const { id, numero, disponivel, selecionado, aoSelecionar } = props;

    function selecionarAssento() {
        if(!disponivel) alert("Seat not available!");
        else aoSelecionar(id, numero);
    }
    
    
    console.log(disponivel)
    return (
        <Posicao >

            <Tela disponivel={disponivel}
            selecionado={selecionado}
            onClick={selecionarAssento}>
                <h2>{numero}</h2>
            </Tela>
        </Posicao>
    )
}
function corAssento(selecionado, disponivel) {

     if (selecionado) return "#8DD7CF"; 
    else if (disponivel) return "#C3CFD9";
    else return "#FBE192"
    
}


const Posicao = styled.div`
`



const Tela = styled.div`
width: 26px;
height: 26px;

background-color: ${(props) => corAssento(props.selecionado, props.disponivel)};
border: 1px solid #808F9D;
border-radius: 12px;
display: flex;
align-items: center;
justify-content: center;

margin-left: 7px;
margin-bottom: 18px;

h2 {
    width: 13px;
height: 10px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 11px;
line-height: 13px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.04em;
}

`