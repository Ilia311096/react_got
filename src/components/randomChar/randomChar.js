import React, {Component} from 'react';
import './randomChar.css';
import GotService from '../../services/service';
import Spinner from '../spiner/spiner';
import DivError from '../eroor/eroor';
import PropTypes from 'prop-types';

export default class RandomChar extends Component {
    constructor(props){
        super(props);
        this.randomChar()
    }
    static defaultProps = {
        ms:10000,
    }
    static propTypes ={
        randomChar:PropTypes.func,
        id: PropTypes.number,
    }

    state = {
        char : {},
        loading:true,
        error:false
    }
    timerId = null;
    componentDidMount(){
        this.timerId = setInterval(this.randomChar,this.props.ms)
    }
    componentWillUnmount(){
        clearInterval(this.timerId);
    }


    updateState=(char)=>{
        this.setState({char,loading:false})
    }
    upError = (error)=>{
        console.log(error)
        this.setState({error:true,loading:false})
    }
    randomChar = ()=>{
        const a = new GotService();
        const id = Math.floor(Math.random()*140)
        a.getCharacter(id)
        .then(this.updateState)
        .catch(this.upError);
    }
    render() {
        const {char,loading,error} = this.state;
        const eroor = error? <DivError/>:null;
        const spiner = loading? <Spinner/>: null;
        const content = !(loading ||eroor)? <View char ={char}/>:null;
        return (
            <div className="random-block rounded">
                {spiner}
                {eroor}
                {content}
                
            </div>
        );
    }
}
const View =({char})=>{
    const {name,gender,born,died,culture} = char;
    return(
        <>
            <h4>Random Character: {name}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Gender </span>
                    <span>{gender}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Born </span>
                    <span>{born}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Died </span>
                    <span>{died}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Culture </span>
                    <span>{culture}</span>
                </li>
            </ul>
        </>
    )
}
