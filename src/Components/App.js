import { BrowserRouter, Routes, Route } from "react-router-dom"

import TelaInicial from "./TelaInicial"
import TelaSessoes from "./TelaSessoes"
import TelaAssentos from "./TelaAssentos"
import TelaSucesso from "./TelaSucesso"
import Header from "./Header"
import { useState } from "react"

export default function App() {
const [reserva, setReserva] = useState(null);

    return (
    <BrowserRouter>
<Header/>
<Routes>
<Route path="/" element={<TelaInicial />}/>
<Route path="/sessoes/:filmeId" element={<TelaSessoes />}/>
<Route path="/assentos/:sessaoId" element={<TelaAssentos finalizar={
    (reserva) => setReserva(reserva)}/>}/>
<Route path="/sucesso" element={<TelaSucesso reserva={reserva}/>}/>
</Routes>
</BrowserRouter>
)
}