// Dependencies
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Components Containers
import HomeContainer from './NoteApp/Components/Containers/HomeContainer';
import NoteListContainer from './NoteApp/Components/Containers/NoteListContainer';
import CustomerNoteContainer from './NoteApp/Components/Containers/CustomerNoteContainer';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={NoteListContainer} />
                    <Route exact path="/home" component={HomeContainer} />
                    <Route path="/note/:id" render={props => <CustomerNoteContainer id={props.match.params.id} />} />
                </Switch>
            </Router>
        );
    }
}

export default App;
