import React, { Component } from 'react';
import styles from './App.module.css';
import { Route, Switch } from 'react-router-dom';
import PokeDex from './pages/PokeDex/PokeDex';
import PokeInfo from './pages/PokeInfo/PokeInfo';
import Poke from './pages/Poke/Poke';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


class App extends Component {
  render() {
    return (
      <div className={styles.app}>

        <AppBar className={styles.bg} position="static">
        </AppBar>

        <main>
          <Switch>
            <Route exact path="/" component={PokeDex} />
            <Route exact path="/PokeInfo" component={PokeInfo} />
            <Route exact path="/Poke/:pokemonIndex" component={Poke} />
          </Switch>
        </main>

      </div>
    );
  }
}

export default App;
