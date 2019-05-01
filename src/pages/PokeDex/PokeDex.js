import React, { Component, Fragment } from 'react';
import axios from 'axios';
import PokeInfo from '../PokeInfo/PokeInfo';
import styles from './PokeDex.module.css';
import { withStyles } from '@material-ui/core/styles';
import Spinner from '../../assets/Pacman.gif';
import Grid from '@material-ui/core/Grid';


class PokeDex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemons: [],
            loading: true,
        }
    }

    componentDidMount() {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=151').then((response) => {



            const loadingTimer = setTimeout(() => {
                clearTimeout(loadingTimer);
                this.setState({
                    pokemons: response.data['results'],
                    loading: false,
                });
            }, 1500);



        })
    }
    render() {
        const styles = theme => ({
            root: {
                flexGrow: 1,
            },
            paper: {
                padding: theme.spacing.unit * 2,
                textAlign: 'center',
                color: theme.palette.text.secondary,
            },
        });

        const { loading } = this.state;
        return (
            <Fragment>
                {loading ? <div className={styles.spinnerImg}>
                    <img className={styles.spinnerImg} src={Spinner} alt="Loading" /> </div>
                    :
                    <div className={styles.root}>
                        <Grid container spacing={24}>

                            {this.state.pokemons.map(pokemons => (
                                <PokeInfo key={pokemons.name} name={pokemons.name} url={pokemons.url} />
                            ))}


                        </Grid>
                    </div>
                }
            </Fragment>
        );
    };
}
export default withStyles(styles)(PokeDex);
