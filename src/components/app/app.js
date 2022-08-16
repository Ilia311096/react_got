import React, { Component } from 'react';
import {Col, Row, Container,Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import CharPage from '../charPage/charPage';
import BookPage from '../bookPage/bookPage';
import HousePage from '../housePage/housePage';
import BookItem from '../bookItem';
import './app.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
    state ={
        randomChar:true,
    }
    toggleChar = () =>{
        this.setState({randomChar: !this.state.randomChar})
    }
    render(){
        const toggleRandomChar = this.state.randomChar? <RandomChar id={'hjk'}/>:null
        return (
            <Router>
            <div className='app'> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {toggleRandomChar}
                            <Button color="primary" onClick={this.toggleChar}>
                                Click for toggle
                            </Button>
                        </Col>
                    </Row>
                    <Route path='/' exact component={()=>{
                        return <h2>Welcome</h2>
                    }}/>
                    <Route path='/characters' component={CharPage}/>
                    <Route path='/books' exact component={BookPage}/>
                    <Route path='/houses' component={HousePage}/>
                    <Route path='/books/:id' render={({match})=>{
                        return <BookItem id={match.params.id}/>
                    }}/>
                </Container>
            </div>
            </Router>
        );
    }
}

export default App;