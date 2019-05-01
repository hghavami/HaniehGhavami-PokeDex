import React, { Component, Fragment } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import styles from './Poke.module.css';
import { NavLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

class Poke extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            imageUrl: '',
            pokemonIndex: '',
            stats: {
                hp: '',
                attack: '',
                defense: '',
                speed: '',
                specialAttack: '',
                specialDefense: ''
            },
        }
    }

    async componentDidMount() {
        const { match: { params } } = this.props;
        // Urls for pokemon information
        const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${params.pokemonIndex}/`;
 
        axios.get(pokemonUrl).then((response) => {
            this.setState({
                name: response.data.name,
                imageUrl: response.data.sprites.front_shiny,
            })


            let { hp, attack, defense, speed, specialAttack, specialDefense } = '';

            response.data.stats.map(stat => {
                switch (stat.stat.name) {
                    case 'hp':
                        hp = stat['base_stat'];
                        break;
                    case 'attack':
                        attack = stat['base_stat'];
                        break;
                    case 'defense':
                        defense = stat['base_stat'];
                        break;
                    case 'speed':
                        speed = stat['base_stat'];
                        break;
                    case 'special-attack':
                        specialAttack = stat['base_stat'];
                        break;
                    case 'special-defense':
                        specialDefense = stat['base_stat'];
                        break;
                    default:
                        break;
                }
            });

            this.setState({
                stats: {
                    hp,
                    attack,
                    defense,
                    speed,
                    specialAttack,
                    specialDefense
                }
            })

        })
    }

    render() {


        const { match: { params } } = this.props;
        return (
            <Fragment>

                <div className={styles.root}>

                    <Paper className={styles.paper}>
                        <AppBar className={styles.bg} position="static">
                            <Toolbar variant="dense">
                                <Typography className={styles.indexNum} variant="h6" color="inherit" noWrap>
                                    {params.pokemonIndex}
                                </Typography>
                                <div className={styles.backBTN}>
                                    <NavLink to="/">
                                        <Button  variant="outlined" color="inherit" >
                                            Back
                                         </Button>
                                    </NavLink>
                                </div>
                            </Toolbar>
                        </AppBar>
                        <Grid container spacing={16} className={styles.pokemonDetail}>
                            <Grid item xs={12} >
                                <Grid container>
                                    <Grid item xs={4} sm={4}   >
                                      
                                        <div className={styles.stateInfo}>
                                            
                                            <img src={this.state.imageUrl}  alt={this.state.name} />
                                            </div>
                                       
                                    </Grid>
                                    <Grid item xs={8} sm={8} className={styles.stateName}>
                                    <h4  >
                                                {this.state.name
                                                    .toLowerCase()
                                                    .split(' ')
                                                    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                                                    .join(' ')}
                                            </h4>
                                    <div className={styles.stateTitle}>
                                    HP
                                    </div>
                                    <div className={styles.stateProgress}>
                                    <LinearProgress value={parseInt(this.state.stats.hp)} valueBuffer={parseInt(this.state.stats.hp)} variant="buffer" />

                                    </div>


                                       
                                       <div className={styles.stateTitle}>
                                    Attack
                                    </div>
                                    <div className={styles.stateProgress}>
                                    <LinearProgress value={parseInt(this.state.stats.attack)}  valueBuffer={parseInt(this.state.stats.attack)} variant="buffer" />

                                    </div>

                                      <div className={styles.stateTitle}>
                                      Defense
                                    </div>
                                    <div className={styles.stateProgress}>
                                    <LinearProgress value={parseInt(this.state.stats.defense)} valueBuffer={parseInt(this.state.stats.defense)} variant="buffer" />

                                    </div>

                                      <div className={styles.stateTitle}>
                                      Speed
                                    </div>
                                    <div className={styles.stateProgress}>
                                    <LinearProgress value={parseInt(this.state.stats.speed)} valueBuffer={parseInt(this.state.stats.speed)} variant="buffer" />

                                    </div>

                                      <div className={styles.stateTitle}>
                                      Special Attack
                                    </div>
                                    <div className={styles.stateProgress}>
                                    <LinearProgress value={parseInt(this.state.stats.specialAttack)} valueBuffer={parseInt(this.state.stats.specialAttack)} variant="buffer" />

                                    </div>

                                       <div className={styles.stateTitle}>
                                       Special Defense
                                    </div>
                                    <div className={styles.stateProgress}>
                                    <LinearProgress value={parseInt(this.state.stats.specialDefense)} valueBuffer={parseInt(this.state.stats.specialDefense)} variant="buffer" />

                                    </div>

                                    

                                       
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </div>






            </Fragment>
        );
    }

}
// Poke.propTypes ={
//     {param.pokemonIndex }: propTypes.number,
  
// }
 

Poke.propTypes={
match: PropTypes.shape({
    params: PropTypes.shape({
      pokemonIndex: PropTypes.string.isRequired
    })
  })
}

export default Poke;


