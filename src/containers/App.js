import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            cats: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => this.setState({ cats: users }))
        
    }

    onSearchChange = (event) =>{
        this.setState( { searchField: event.target.value } );
    }

    render() {
        const { cats } = this.state;
        const filteredCats = cats.filter(cat => {
            return cat.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });
        return (!cats.length) ? 
            <h1>LOADING</h1> :
        (
            <div className='tc'>
                <h1 className='f1'>Cat Friends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList cats={filteredCats} />
                    </ErrorBoundary>                   
                </Scroll>
            </div>
        );        
    }    
}

export default App;