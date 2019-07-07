import React from 'react'
import {Link} from 'react-router-dom'

class CabMenu extends React.Component {
  render() {
    return (
      <div className="mb-2">
        <nav className="navbar navbar-expand-sm bg-danger navbar-dark">
          
          <Link to="/" className="navbar-brand">Filmoteca</Link>

          <ul className="navbar-nav">
            <li>
              <Link to="/cadastro" className="nav-link">Cadastro</Link>
            </li>
            <li>
              <Link to="/lista" className="nav-link">Listagem</Link>
            </li>
            <li>
              <Link to="/resumo" className="nav-link">Resumo</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default CabMenu