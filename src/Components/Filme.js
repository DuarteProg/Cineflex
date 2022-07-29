import { Link } from "react-router-dom";
import styled from "styled-components";


export default function Filme(props) {
const { id, poster, titulo} = props;
    return (
        <Link to={`/sessoes/${id}`}>
            <Poster>
    <div>
        <img src={poster} alt={titulo}/>
    </div>
    </Poster>
    </Link>
)
}

const Poster = styled.div`
img {
    width: 129px;
height: 193px;
padding-right: 30px;
padding-left: 25px;
}
`