import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import CabMenu from './CabMenu'
import HomePage from './HomePage'
import FormCadastro from './FormCadastro';
import Listagem from './Listagem';
import Resumo from './Resumo';

function App() {
  return (
    <Router>
        <CabMenu />
        <Route exact path='/' component={HomePage} />
        <Route path='/cadastro' component={FormCadastro} />
        <Route path='/lista' component={Listagem} />
        <Route path='/resumo' component={Resumo} />
    </Router>
  );
}

export default App;