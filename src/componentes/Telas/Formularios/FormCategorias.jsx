import { useState } from 'react';
import { Form, Row, Col, Button, FloatingLabel } from 'react-bootstrap';

export default function FormCategorias(props) {

    const [categoria, setCategoria]=useState(props.categoriaSelecionada);
    const [formValidado, setFormValidado]=useState(false);

    function manipularSubmissao(evento){
        const form = evento.currentTarget;
        if(form.checkValidity()){
          if(!props.modoEdicao){
            props.setListaDeCategorias([...props.listaDeCategorias, categoria]);
            props.setExibirTabela(true);
          }
          else{
            props.setListaDeCategorias(props.listaDeCategorias.map((item)=>{
              if(item.codigo!==categoria.codigo)
                return item
              else
                return categoria
            }));
  
            props.setModoEdicao(false);
            props.setCategoriaSelecionada({
              codigo:0,
              descricao:"",
            });
            props.setExibirTabela(true);
          }
        }
        else{
          setFormValidado(true);
        }
        evento.preventDefault();
        evento.stopPropagation();
      }

      function manipularMudanca(evento){
        const elemento = evento.target.name;
        const valor=evento.target.value;
        setCategoria({...categoria,[elemento]:valor});
      }

    return (
            <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                label="Código:"
                                className="mb-3">

                                <Form.Control
                                    required
                                    type="text" 
                                    id="codigo"
                                    name="codigo"
                                    value={categoria.codigo}
                                    disable={props.modoEdicao}
                                    onChange={manipularMudanca}  />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o código da categoria!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                label="Categoria:"
                                className="mb-3"
                            >
                                <Form.Control
                                    required
                                    type="text"
                                    id="descricao"
                                    name="descricao"
                                    value={categoria.descricao}
                                    onChange={manipularMudanca} />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe a descrição da categoria!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className='mt-2 mb-2'>
                <Col md={1}>
                    <Button type="submit">{props.modoEdicao ? "Alterar":"Confirmar"}</Button>
                </Col>
                <Col md={{offset:1}}>
                    <Button onClick={()=>{
                        //props.setExibirTabela(true);
                    }}>Voltar</Button>
                </Col>
            </Row>

            </Form>
    );

}