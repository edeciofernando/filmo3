import React from 'react'

import ItemLista from './ItemLista'
import './tabela.css'

class Listagem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      filmes: []
    }
  }

  componentDidMount() {
    this.loadFilmes()
  }

  loadFilmes = async () => {
    //const dados = await JSON.parse(localStorage.getItem("filmes"));
    let dados = await JSON.parse(localStorage.getItem("filmes"));
    dados.sort(function(a, b) {return a.genero < b.genero ? -1 : 1})
    this.setState({ filmes: dados });
  }

  formataData(data) {
    return (new Date(data).toLocaleDateString('pt-br'));
  }

  excluir = num => {
    let filmes = JSON.parse(localStorage.getItem("filmes"));
    // retira o índice do vetor
    filmes.splice(num, 1);
    localStorage.setItem("filmes", JSON.stringify(filmes));  
    this.setState({filmes: filmes})
  }

  alterar = num => {
    let filmes = JSON.parse(localStorage.getItem("filmes"));
    
    let novaNota = prompt("Nota: ")

    filmes[num].nota = novaNota;

    localStorage.setItem("filmes", JSON.stringify(filmes));  
    this.setState({filmes: filmes})
  }

  render() {
    return (
      <div className="mx-2">
        <table className="table table-sm table-striped table-bordered table-action">
          <thead>
            <tr className="table-primary">
              <th>Título</th>
              <th>Gênero</th>
              <th>Nota</th>
              <th>Data</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {this.state.filmes.map((filme, key) => (
              <ItemLista key={key} 
                         numero={key} 
                         titulo={filme.titulo} 
                         genero={filme.genero} 
                         nota={filme.nota} 
                         data={this.formataData(filme.data)} 
                         excluir={this.excluir}
                         alterar={this.alterar}  
                         />
            ))}

          </tbody>
        </table>
      </div>
    )
  }
}

export default Listagem