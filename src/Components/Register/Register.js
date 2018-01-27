import React, { Component } from 'react'
import { Card, CardText, FlatButton, TextField, RaisedButton } from 'material-ui'
import { CardTitle } from 'material-ui/Card';
import { FirebaseService, AuthService } from '../../services'

import { ToggleButton, SiderDrawer} from '../../Components'

export default class Register extends Component{

    constructor(props){
        super(props);
    }

    getTitle = () => {
        return this.props.isGuest ? "Create new Guest Account" : "Create new Account";
    }


    render(){
        return(
            <Card>
                <CardTitle title={getTitle()}>
                </CardTitle>
                <CardText>
                <TextField
                    hintText="Enter your Username"
                    floatingLabelText="Username"
                    onChange = {(event,newValue) => this.setState({userName:newValue})}
                    />
                <br/>
                <TextField
                    type="password"
                    hintText="Enter your Password"
                    floatingLabelText="Password"
                    onChange = {(event,newValue) => this.setState({password:newValue})}
                />
                <br/>
                <RaisedButton label="Submit" primary={true} onClick={(event) => this.handleClick(event)}/>
                </CardText>
            </Card>
        )
    }
}