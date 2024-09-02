import FormCategorias from './Formularios/FormCategorias';
import { Alert } from 'react-bootstrap';

export default function TelaCadCategorias(props){

    return (
        <div>
            <Alert>
                <h2 className={"text-center"}>
                    Cadastro de Categorias
                </h2>
            </Alert>
            <FormCategorias/>
        </div>
        
    );
}