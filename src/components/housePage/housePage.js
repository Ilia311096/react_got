import React, { Component } from 'react';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import DivError from '../eroor/eroor';
import GotService from '../../services/service';
import RowBlock from '../rowBlock/rowBlock';
import { Field } from '../charDetails/charDetails';

export default class HousePage extends Component{
    state ={
        selectedHouse:1,
        error:false
    }
    gotService = new GotService();
    componentDidCatch(){
        this.setState({error:true})
    }
    changeSelectedHouse = (id)=>{
        this.setState({selectedHouse:id})
    } 
    
    render(){
        if(this.state.error){
            return <DivError/>
        }
        const itemList = (
            <ItemList fun={this.changeSelectedHouse} 
                    gotService={this.gotService.getAllHouses}
                    renderName = {(item)=>item.name}/>
        )
        const charDetails = (
            <CharDetails itemId={this.state.selectedHouse} url={this.gotService.getHouse}>
                <Field name={'region'} label={'Region'}></Field>
                <Field name={'words'} label={'Words'}></Field>
                <Field name={'overloard'} label={'Overloard'}></Field>
            </CharDetails>
        );
        
        return(
            <RowBlock left={itemList} right={charDetails}/>
        )
    }
}