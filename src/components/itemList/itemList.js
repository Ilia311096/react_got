import React, {Component} from 'react';
import './itemList.css';
import Spiner from '../spiner/spiner';

class ItemList extends Component {

    state = {
        items:null,
    }
    getItems = ()=>{
        const a = this.props.gotService;
        a()
        .then(this.updateState)
        .catch(this.upError);
    }
    updateState=(item)=>{
        const items = this.mappingItems(item);
        this.setState({items});
        
    }
    componentDidMount(){
        this.getItems();
    }
    mappingItems(objs){
        return objs.map((item)=>{
            const label = this.props.renderName(item);
            const id = item.id;
            return(
                <li key={id} className="list-group-item" onClick={()=>this.props.fun(id)}>
                    {label}
                </li>      
            )
        })
    }
    render() {
        let {items} = this.state;
        if(!items){
            items = <Spiner/>
        }
        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}

const withData = function(View){
    return class extends Component{
        render(){
            return(
                <View {...this.props}/>
            )
        }
    }
}
export default withData(ItemList); 