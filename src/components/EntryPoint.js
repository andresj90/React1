import React, { Component } from 'react'
import {
    Route, Switch,
} from 'react-router-dom';
import ShowContainer from './show/ShowContainer';
import EpisodeContainer from './episode/EpisodeContainer';
import NavBar from './NavBar';
import Footer from './Footer';
export class EntryPoint extends Component {
    render() {
        return (
            <div>
                <NavBar></NavBar>
                <div id="containerinfo">
                    <Switch>
                        <Route exact path='/' component={ShowContainer} />
                        <Route path="/episodes" component={EpisodeContainer} />
                    </Switch>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}

export default EntryPoint
