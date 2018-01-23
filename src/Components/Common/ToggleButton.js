import React, { Component } from 'react'
import { Card, CardText, FlatButton, TextField, RaisedButton, CardActions } from 'material-ui'
import { CardTitle } from 'material-ui/Card';
import { FirebaseService, AuthService } from '../../services'
import { database } from '../../constants'


export default class ToggleButton extends Component{
    service = null;
    auth = null;
    state ={
        garageAccess: false,
        garageState: "closed"
    }
    constructor(props){
        super(props);
        this.service = new FirebaseService();
        this.auth = new AuthService();
        database.ref().child("doorStatus/access").on("value", (snapshot) =>{
            var accessVal = snapshot.val();
            let accessState = false;
            if(accessVal == "allowed"){
                accessState = true;
            }
            this.setState({garageAccess: accessState});
        });

        database.ref().child("doorStatus/state").on("value", (snapshot) =>{
            var garageState = snapshot.val();
            this.setState({garageState: garageState});
            
        })
    }
    clickOpen = () =>{
        this.service.sendOpenCommand();
    };

    clickClose = () =>{
        this.service.sendCloseCommand();
    }

    changeGarageState = () =>{
        this.state.garageState == 'opened'? this.service.sendCloseCommand() : this.service.sendOpenCommand();
    }

    updateGarageAccess = () =>{
        this.service.sendGarageAccess(!this.state.garageAccess);
    }

    logOut = () => {
        this.auth.logout();
    }

    getAccessLabel = () =>{
        return this.state.garageAccess ? 'Disable Access' : 'Enable Access';
    }

    getOpenCloseLabel(){
        return this.state.garageState == "closed" ? 'Open' : 'Close';
    }

    render(){
        return(
            <Card>
                <CardTitle title="Scott's Awesome Garage Door Opener">
                </CardTitle>
                <CardActions> 
                
                <RaisedButton  label={this.getOpenCloseLabel()} primary={true} onClick={this.changeGarageState} disabled={!this.state.garageAccess}/>
                <RaisedButton label={this.getAccessLabel()} secondary={true} onClick={(event) => this.updateGarageAccess(event)}/>
                <RaisedButton label="Log Out" onClick={(event) => this.logOut(event)}/>
                </CardActions>
            </Card>
        );
    }
}
