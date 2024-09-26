import Pagina from "./componentes/layouts/Pagina";
import TelaCadProdutos from "./componentes/Telas/TelaCadProdutos";
import TelaCadCategorias from "./componentes/Telas/TelaCadCategorias";
import TelaMenu from "./componentes/Telas/TelaMenu";
import Tela404 from "./componentes/Telas/Tela404";
import TelaCadEntregadores from "./componentes/Telas/TelaCadEntregadores";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        { //A ordem das rotas é importante 
        }
        <Routes>
          <Route path="/produto" element={<TelaCadProdutos />} />
          <Route path="/categoria" element={<TelaCadCategorias />} />
          <Route path="/entregador" element={<TelaCadEntregadores />} />
          <Route path="/" element={<TelaMenu />} />
          <Route path="*" element={<Tela404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
