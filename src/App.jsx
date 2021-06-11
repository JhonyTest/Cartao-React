import React from 'react';
import './App.css'
import Projeto from './components/Projeto';
import Parametros from './components/Parametros';
import Pontuacoes from './components/Pontuacoes';
import Card from './components/layout/Card';


// eslint-disable-next-line
export default () => (

  <div className="App">
    <Card titulo="Primeiro ">
      <Projeto />
     </Card>
    <Card titulo="Segundo">
    <Parametros titulo="Segundo" />
    </Card>
    <Card titulo="Terceiro" >
    <Pontuacoes titulo="Terceiro" />
    </Card>
    </div>
);