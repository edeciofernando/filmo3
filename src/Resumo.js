import React from 'react'

class Resumo extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      total: 0,
      media: 0,
      genero: []
    }
  }

  componentDidMount() {
    this.loadFilmes()
  }

  loadFilmes = async () => {
    const filmes = await JSON.parse(localStorage.getItem("filmes"));

    //let soma = 0
    //dados.map((dado) => ( 
    //  soma += Number(dado.nota)
    //))
    let calcSoma = filmes.reduce((soma, filme) => {
      return soma + Number(filme.nota);
    }, 0)

    /*
    var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
    
    var countedNames = names.reduce(function (allNames, name) { 
      if (name in allNames) {
        allNames[name]++;
      }
      else {
        allNames[name] = 1;
      }
      return allNames;
    }, {});
    // countedNames is:
    // { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
    */

    this.setState({ total: filmes.length })
    this.setState({ media: (calcSoma / filmes.length).toFixed(1) })
    this.setState({ genero: ['AA'] })
  }

  render() {
    return (
      <div className="media border p-3 mx-2">
        <img src="resumo.png" alt="Resumo" className="mr-3 mt-3 rounded-circle" style={{width:80}} />
        <div className="media-body">
          <h4 className="text-danger">Resumo: Filmoteca</h4>
          <h5><i>Total de Filmes: {this.state.total} </i></h5>
          <h5><i>Média de Notas: {this.state.media} </i></h5>
          <br/>
          <h5 className="text-primary">Filmes por Gênero:<br/>
              <small><i>{this.state.genero} : 4</i></small></h5>
        </div>
      </div>
    )
  }
}

export default Resumo