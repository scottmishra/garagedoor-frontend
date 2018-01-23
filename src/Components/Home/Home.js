import React, { Component } from 'react'
import { Card, CardText, FlatButton, TextField, RaisedButton } from 'material-ui'
import { CardTitle } from 'material-ui/Card';
import { FirebaseService, AuthService } from '../../services'

import { ToggleButton, SiderDrawer} from '../../Components'

export default class Home extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <ToggleButton />
                <SiderDrawer />
            </div>
        )
    }
}