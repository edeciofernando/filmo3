import React from 'react'

class FormCadastro extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      titulo: '',
      genero: '',
      nota: '',
      data: ''
    }

    this.gravar = this.gravar.bind(this)
    this.campos = this.campos.bind(this)
  }

  campos(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  gravar(e) {
    e.preventDefault();

    let filmes = []
    if (localStorage.getItem("filmes")) {
      filmes = JSON.parse(localStorage.getItem("filmes"));
    }
    filmes.push({ titulo: this.state.titulo, genero: this.state.genero, nota: this.state.nota, data: this.state.data });
    localStorage.setItem("filmes", JSON.stringify(filmes));

    this.setState({ titulo: '', genero:'', nota: '', data: '' })
    alert("Ok! Inserido")
  }

  render() {
    return (
      <form className="mx-3" onSubmit={this.gravar}>
        <div className="row">
          <div className="input-group col-sm-6 mt-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Título:</span>
            </div>
            <input type="text" className="form-control" autoFocus
              name="titulo"
              value={this.state.titulo}
              onChange={this.campos} />
          </div>

          <div className="input-group col-sm-6 mt-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Gênero:</span>
            </div>
            <select className="form-control"
              value={this.state.genero}
              name="genero"
              onChange={this.campos}>
              <option></option>
              <option>Aventura</option>
              <option>Comédia</option>
              <option>Drama</option>
              <option>Romance</option>
              </select>
          </div>
        </div>

        <div className="row">
          <div className="input-group col-sm-4 mt-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Data:</span>
            </div>
            <input type="date" className="form-control"
              value={this.state.data}
              name="data"
              onChange={this.campos} />
          </div>

          <div className="input-group col-sm-8 mt-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Nota:</span>
            </div>
            <input type="number" min="0" max="10" className="form-control"
              value={this.state.nota}
              name="nota"
              onChange={this.campos} />

            <div className="input-group-append">
              <button className="btn btn-danger" type="submit"> Enviar </button>
              <button className="btn btn-primary" type="reset"> Limpar </button>
            </div>
          </div>
        </div>

      </form>
    )
  }

}

export default FormCadastro
