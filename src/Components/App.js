import { BrowserRouter, Routes, Route } from "react-router-dom"

import TelaInicial from "./TelaInicial"
import TelaSessoes from "./TelaSessoes"
import TelaAssentos from "./TelaAssentos"
import TelaSucesso from "./TelaSucesso"
import Header from "./Header"

export default function App() {
return (
    <BrowserRouter>
<Header/>
<Routes>
<Route path="/" element={<TelaInicial />}/>
<Route path="/sessoes/:filmeId" element={<TelaSessoes />}/>
<Route path="/assentos/:sessaoId" element={<TelaAssentos />}/>
<Route path="/sucesso" element={<TelaSucesso />}/>
</Routes>
</BrowserRouter>
)
}