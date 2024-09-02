import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';

export default function FormProdutos(props){

    return (
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCodigo">
              <Form.Label>Código</Form.Label>
              <Form.Control type="codigo" placeholder="" />
            </Form.Group>
    
            <Form.Group as={Col} controlId="formGridNome">
              <Form.Label>Nome do Produto</Form.Label>
              <Form.Control type="nomeProduto" placeholder="Nome" />
            </Form.Group>
          </Row>
    
          <Form.Group className="mb-3" controlId="formGridDescricao">
            <Form.Label>Descrição do produto</Form.Label>
            <Form.Control placeholder="Enter descrição" />
          </Form.Group>

          <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">R$</InputGroup.Text>
                <Form.Control
                placeholder="Preço de Custo"
                aria-label="Preço de Custo"
                aria-describedby="basic-addon1"
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">R$</InputGroup.Text>
                <Form.Control
                placeholder="Preço de Venda"
                aria-label="Preço de Venda"
                aria-describedby="basic-addon1"
                />
            </InputGroup>
    
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