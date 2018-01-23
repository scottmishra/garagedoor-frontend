import React, { Component } from 'react'
import { Drawer, FloatingActionButton, FontIcon, MenuItem } from 'material-ui'
import { CardTitle } from 'material-ui/Card';
import { FirebaseService, AuthService } from '../../services'

const style = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
};

export default class SideDrawer extends Component{

    state ={
        toggleMenu: false
    }

    constructor(props){
        super(props);
    }

    switchMenu = () => {
        this.setState({toggleMenu: !this.state.toggleMenu});
    }

    render(){

        return(
            <div>
                <Drawer open={this.state.toggleMenu}>
                    <MenuItem>Register New User</MenuItem>
                    <MenuItem>Register Guest</MenuItem>
                </Drawer>
                <FloatingActionButton primary={true} onClick={this.switchMenu} style={style}>
                    <FontIcon className='fa fa-bars' />
                </FloatingActionButton>
            </div>
        )
    }
}