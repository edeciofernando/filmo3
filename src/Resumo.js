import React from 'react'

class Resumo extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      total: 0,
      media: 0,
      generosNum: []
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

    let filmesGenero = filmes.reduce((todosFilmes, filme) => {
      if (filme.genero in todosFilmes) {
        todosFilmes[filme.genero]++
      } else {
        todosFilmes[filme.genero]=1
      }
      return todosFilmes
    }, {})

    /* Converte objeto em vetor (mas, não foi preciso)
    let generos = []
    for (var key in filmesGenero) { 
      generos.push(key + " - " + filmesGenero[key])
    }
    console.log(filmesGenero)

   //this.setState({ generosNum: generos })
   */

    this.setState({ total: filmes.length })
    this.setState({ media: (calcSoma / filmes.length).toFixed(1) })
    this.setState({ generosNum: filmesGenero })
  }

  render() {
    return (
      <div className="media border p-3 mx-2">
        <img src="resumo.png" alt="Resumo" className="mr-3 mt-3 rounded-circle" style={{ width: 80 }} />
        <div className="media-body text-primary">
          <h4 className="text-danger">Resumo: Filmoteca</h4>
          <h5><i>Total de Filmes: {this.state.total} </i></h5>
          <h5><i>Média de Notas: {this.state.media} </i></h5>
          <h5>Filmes por Gênero: </h5>          
          { Object.entries(this.state.generosNum).map(([key, value]) => (
            <h6 key={key}>{key} - {value}</h6>  
          ))
          }
        </div>
      </div>
    )
  }
}

export default Resumo


/*

// forma de apresentar os objetos
//          {Object.keys(this.state.generosNum).map((key) => {
//             return <h6><i>{key} - {this.state.generosNum[key]}</i></h6>
//          })
//          }          


{this.state.generosNum.map((item, key) => (
            <h6 key={key}>{item}</h6>
          ))}


consultar: https://javascript.info/keys-values-entries

*/