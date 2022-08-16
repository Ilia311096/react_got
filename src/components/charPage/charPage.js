import React, { Component } from 'react';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import DivError from '../eroor/eroor';
import GotService from '../../services/service';
import RowBlock from '../rowBlock/rowBlock';
import { Field } from '../charDetails/charDetails';

export default class CharPage extends Component{
    state ={
        selectedChar:41,
        error:false
    }
    gotService = new GotService();
    componentDidCatch(){
        this.setState({error:true})
    }
    changeSelectedChar = (id)=>{
        this.setState({selectedChar:id})
    } 
    
    render(){
        if(this.state.error){
            return <DivError/>
        }
        const itemList = (
            <ItemList fun={this.changeSelectedChar}
                    gotService={this.gotService.getAllCharacters}
                    renderName = {(item)=>`${item.name} ${item.born}`}/>
        )
        const charDetails = (
            <CharDetails itemId={this.state.selectedChar} url={this.gotService.getCharacter}>
                <Field name={'born'} label={'Born'}></Field>
                <Field name={'died'} label={'Died'}></Field>
                <Field name={'gender'} label={'Gender'}></Field>
                <Field name={'culture'} label={'Culture'}></Field>
            </CharDetails>
        );
        
        return(
            <RowBlock left={itemList} right={charDetails}/>
        )
    }
}