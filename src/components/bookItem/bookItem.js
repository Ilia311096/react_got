import React, {Component} from 'react';
import CharDetails from '../charDetails';
import { Field } from '../charDetails/charDetails';
import GotService from '../../services/service';
import RowBlock from '../rowBlock/rowBlock';

export default class BookItem extends Component{
    gotService = new GotService();
    
    render(){
        const item =(
                <CharDetails itemId={this.props.id} url={this.gotService.getBook}>
                    <Field name={'numberOfPages'} label={'NumberOfPages'}></Field>
                    <Field name={'publisher'} label={'Publisher'}></Field>
                    <Field name={'released'} label={'Released'}></Field>
                </CharDetails>
            )
        
        return(
            <RowBlock right={item}/>
        )
    }
}