import React from 'react';

const ItemLista = props => (
  //class ItemLista extends React.Component {

  //  render() {
  //    const {titulo, genero, nota, data, numero, excluir} = this.props;

  <tr>
    <td>{props.titulo}</td>
    <td>{props.genero}</td>
    <td>{props.nota}</td>
    <td>{props.data}</td>
    <td>
      <button className="btn btn-sm btn-danger"
        onClick={(e) => window.confirm("Confirma exclusão de " + props.titulo + "?")
          && props.excluir(props.numero, e)}>Excluir</button>&nbsp;&nbsp;
      <button className="btn btn-sm btn-warning"
        onClick={(e) => props.alterar(props.numero, e)}>
        <i className="far fa-edit"></i>Nota</button>

    </td>
  </tr>
)

export default ItemLista


/*
  constructor(props) {
    super(props)

//    this.excluir = this.excluir.bind(this)
  }

  excluir(x, e) {
    alert("ola " + x)
  }

  excluir2 = x => {
    alert("ola2 " + x)
  }
*/