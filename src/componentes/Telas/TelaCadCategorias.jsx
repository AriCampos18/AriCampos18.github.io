import FormCategorias from './Formularios/FormCategorias';
import { Alert } from 'react-bootstrap';
import Pagina from '../layouts/Pagina';

export default function TelaCadCategorias(props){

    return (
        <div>
            <Pagina className="mt-02 mb-02 success text-center" variant="success">
                <Alert>
                    <h2>
                        Cadastro de Categorias
                    </h2>
                </Alert>
                <FormCategorias/>
            </Pagina>
        </div>
        
    );
}