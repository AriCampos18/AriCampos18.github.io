import Pagina from "./componentes/layouts/Pagina.jsx";
import TelaCadProdutos from "./componentes/Telas/TelaCadProdutos.jsx";
import TelaCadCategorias from "./componentes/Telas//TelaCadClientes.jsx";
import TelaCadFornecedores from "./componentes/Telas/TelaCadFornecedores.jsx";
import TelaCadClientes from "./componentes/Telas/TelaCadCategorias.jsx";


function App() {
  return (
    <div className="App">
      
      <Pagina>
        <TelaCadClientes/>
      </Pagina>

      <Pagina>
        <TelaCadProdutos/>
      </Pagina>

      <Pagina>
        <TelaCadFornecedores/>
      </Pagina>

      <Pagina>
        <TelaCadCategorias/>
      </Pagina>
    </div>
  );
}

export default App;
