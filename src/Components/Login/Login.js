import React, { Component, AppBar } from 'react';
import { AuthService } from '../../services';

import { Card, RaisedButton, TextField} from 'material-ui';
import { CardTitle, CardText } from 'material-ui/Card';


export default class Login extends Component{
    auth = new AuthService();
    state = {
        userName: '',
        password: ''
    }
    constructor(props){
        super(props);
    }

    handleClick(event){
        this.auth.login(this.state.userName,this.state.password )
    }

    render(){
        return(
            <Card>
                <CardTitle title="Log into Scott's Awesome Garage Door Opener">
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