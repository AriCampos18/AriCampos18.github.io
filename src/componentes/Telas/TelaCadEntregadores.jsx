import FormEntregadores from "./Formularios/FormEntregadores";
import { Alert } from "react-bootstrap";

export default function TelaCadEntregadores(props){

    return (
      <div>
          <Alert>
              <h2 className={"text-center"}>
                  Cadastro de Entregadores
              </h2>
          </Alert>
          <FormEntregadores/>
      </div>
        
      );
}