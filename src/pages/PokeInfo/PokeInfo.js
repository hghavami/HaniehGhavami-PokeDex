import React, {Component ,Fragment} from 'react';
import propTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import loading from '../../assets/loading.gif'; 
import styles from './PokeInfo.module.css';
import {NavLink } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

class PokeInfo extends Component{
    constructor(props){
        super(props);
        this.state={
            name: '',
            imageUrl:'',
            pokemonIndex: '',
            imageLoading: true,
            imageError: false,

        }
    }

    componentDidMount(){
        const {name,url} = this.props;
        const pokemonIndex = url.split('/')[url.split('/').length -2];
        const imageUrl =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`

        this.setState({
            name,
            imageUrl,
            pokemonIndex,
        })
         
    }

render(){  
    
    const { imageError,imageLoading} = this.state;
    return (

        
        <Fragment >
             <Grid item xs={6} sm={3} className={styles.card2}>
            <NavLink to={`Poke/${this.state.pokemonIndex}`}>
          
        <Card className={styles.card}>
                
               {imageLoading ? <img src={loading} alt="loading" /> : null}
               <img
                    onLoad={() => {this.setState({imageLoading : false})}}
                    onError={() => {this.setState({imageError : true})}}
                    className={styles.media}
                   src={this.state.imageUrl}
                    title={this.props.name}
                    style={imageLoading ? {display: 'none'} : null}
                    alt={this.props.name}
                />

                   {imageError ? alert("dd") : null}
                   <CardHeader   
                 className={styles.cardTitle}
                title={this.state.name
                .toLowerCase()
                .split(' ')
                .map(letter => letter.charAt(0).toUpperCase() + letter.substring(1) )
                .join(' ')} 
                 />
            </Card>
       
            </NavLink>
            </Grid>
          
        </Fragment>
    );
}
}

PokeInfo.propTypes ={
    name : propTypes.string,
    url :propTypes.string,
}
  
  export default PokeInfo;

