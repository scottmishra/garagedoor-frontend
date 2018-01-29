import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import { AppBar, Card, CardText, FlatButton, IconButton, MoreVertIcon,MenuItem, IconMenu, TextField, RaisedButton, } from 'material-ui'
import { CardTitle } from 'material-ui/Card';
import { FirebaseService, AuthService } from '../../services'

import { ToggleButton, SiderDrawer } from '../../Components'
import Register from '../Register/Register';

export default class Home extends Component {

    constructor() {
        super();
    
    }
    render() {
        return (
            <div>
                <AppBar title="Scott's Awesome Garage Door Opener"
                    iconElementRight={
                            <span>
                                <Link to="/RegisterUser">
                                    <FlatButton label="Register User" />
                                </Link>
                                <Link to="/RegisterGuest">
                                    <FlatButton label="Register Guest" />
                                </Link>
                            </span>
                        }
                />
                <ToggleButton />
                <Switch>
                    <Route exact path='/RegisterUser' render={() => <Register isGuest={false} />} />
                    <Route exact path='/RegisterGuest' render={() => <Register isGuest={true} />} />
                </Switch>
            </div>
        )
    }
}