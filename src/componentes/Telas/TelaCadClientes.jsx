import FormClientes from "./Formularios/FormClientes";
import { Alert } from "react-bootstrap";

export default function TelaCadClientes(props){

    return (
        <div>
            <Alert>
                <h2 className={"text-center"}>
                    Cadastro de Clientes
                </h2>
            </Alert>
            <FormClientes/>
        </div>
    );
}