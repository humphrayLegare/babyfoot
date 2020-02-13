import React from 'react'
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, TextInput, Button } from 'react-native';
import Profile from '../components/Profile'

export default class Account extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            username: 'admin',
            password: 'password'
        }
    }

    render(){
        return(
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Profile username={this.state.username} password={this.state.password} />

            </View>
        )
    }
}

const styles = StyleSheet.create({

})
