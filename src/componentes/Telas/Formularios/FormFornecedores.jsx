import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function FormFornecedores(props){

    return(
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCnpj">
              <Form.Label>CNPJ</Form.Label>
              <Form.Control type="cnpj" placeholder="" />
            </Form.Group>
    
            <Form.Group as={Col} controlId="formGridNomeFornecedor">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="nomeFornecedor" placeholder="Nome" />
            </Form.Group>
          </Row>
    
          <Form.Group className="mb-3" controlId="formGridDescricao">
            <Form.Label>Descrição do produto</Form.Label>
            <Form.Control placeholder="Enter descrição" />
          </Form.Group>
    
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridDtValidade">
              <Form.Label>Data de Validade</Form.Label>
              <Form.Control />
            </Form.Group>
    
            <Form.Group as={Col} controlId="formGridCategoria">
              <Form.Label>Categoria</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>
          </Row>
    
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
    );
}
