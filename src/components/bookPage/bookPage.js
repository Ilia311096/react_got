import React, { Component } from 'react';
import ItemList from '../itemList';
import DivError from '../eroor/eroor';
import GotService from '../../services/service';
import RowBlock from '../rowBlock/rowBlock';
import {withRouter}  from 'react-router-dom'

class BookPage extends Component{
    state ={
        error:false
    }
    gotService = new GotService();
    componentDidCatch(){
        this.setState({error:true})
    }
    render(){
        if(this.state.error){
            return <DivError/>
        }
        const itemList = (
            <ItemList fun={(idItem)=>{
                this.props.history.push(idItem)
            }}
                    gotService={this.gotService.getAllBooks}
                    renderName = {(item)=>item.name}/>
        )
        
        
        return(
            <RowBlock left={itemList}/>
        )
    }
}
export default withRouter(BookPage);