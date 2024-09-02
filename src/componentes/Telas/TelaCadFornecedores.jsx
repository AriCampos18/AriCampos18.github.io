import FormFornecedores from "../Telas/Formularios/FormFornecedores";
import { Alert } from "react-bootstrap";

export default function TelaCadFornecedores(props){

    return (
      <div>
          <Alert>
              <h2 className={"text-center"}>
                  Cadastro de Fornecedores
              </h2>
          </Alert>
          <FormFornecedores/>
      </div>
        
      );
}