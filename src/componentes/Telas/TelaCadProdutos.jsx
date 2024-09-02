import FormProdutos from "./Formularios/FormProdutos.jsx";
import { Alert } from "react-bootstrap";

export default function TelaCadProdutos(props){

  return(
    <div>
            <Alert>
                <h2 className={"text-center"}>
                    Cadastro de Produtos
                </h2>
            </Alert>
            <FormProdutos/>
        </div>
  );        
}