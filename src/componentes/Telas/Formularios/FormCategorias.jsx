import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function FormCategorias(props){

    return (
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridNvaCategoria">
              <Form.Label>Nome da Categoria</Form.Label>
              <Form.Control type="nomeCategoria" placeholder="Digite a categoria" />
            </Form.Group>
          </Row>
    
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
    );
}