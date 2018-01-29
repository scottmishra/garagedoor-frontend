import React, { Component } from 'react'
import { Card, CardText, CardTitle, DatePicker, FlatButton, TextField, RaisedButton } from 'material-ui'
import { FirebaseService, AuthService } from '../../services'

import { ToggleButton, SiderDrawer } from '../../Components'

import { firebaseAuth } from '../../constants'

export default class Register extends Component {



    constructor(props) {
        super(props);
        const minDate = new Date();
        this.state = {
            userName: '',
            password: '',
            experationDate: minDate
        }
    }

    getTitle = () => {
        return this.props.isGuest ? "Create new Guest Account" : "Create new Account";
    }

    handleClick(event) {
        console.log(this.state.userName)
        if(this.state.userName && this.state.userName){
            if(this.isGuest && this.state.experationDate){
                return firebaseAuth().createUserWithEmailAndPassword(this.state.userName, this.state.password)
                .then(function(user){
                
                }).catch(function(error){
                });
            }else{

            }
        }
    }

    handleChangeMinDate = (event, date) => {
        this.setState({
            experationDate: date,
        });
    };

    render() {
        return (
            <Card>
                <CardTitle title={this.getTitle()}>
                </CardTitle>
                <CardText>
                    <TextField
                        hintText="Enter your Username"
                        floatingLabelText="Username"
                        onChange={(event, newValue) => this.setState({ userName: newValue })}
                    />
                    <br />
                    <TextField
                        type="password"
                        hintText="Enter your Password"
                        floatingLabelText="Password"
                        onChange={(event, newValue) => this.setState({ password: newValue })}
                    />
                    <br />
                    {this.props.isGuest ? <DatePicker
                        onChange={this.handleDateChange}
                        floatingLabelText="Expiration Date"
                        hintText="Expiration Date"
                        mode="landscape" /> : null }
                    <br />
                    <RaisedButton label="Submit" primary={true} onClick={(event) => this.handleClick(event)} />
                </CardText>
            </Card>
        )
    }
}