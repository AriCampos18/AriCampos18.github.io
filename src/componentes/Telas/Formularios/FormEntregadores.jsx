import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function FormEntregadores(props){

    return(
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCpf">
              <Form.Label>CPF</Form.Label>
              <Form.Control type="cpf" placeholder="" />
            </Form.Group>
    
            <Form.Group as={Col} controlId="formGridNomeEntregador">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="nomeEntregador" placeholder="Nome" />
            </Form.Group>
          </Row>
    
          <Form.Group className="mb-3" controlId="formGridTelefone">
            <Form.Label>Numero de Telefone</Form.Label>
            <Form.Control placeholder="Enter telefone" />
          </Form.Group>
    
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridDtNascimento">
              <Form.Label>Data de Nascimento</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>
    
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
    );
}
