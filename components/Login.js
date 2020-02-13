import * as React from 'react';
import { Component } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, TextInput, Button } from 'react-native';
import 'bootstrap/dist/css/bootstrap.min.css';


//colors
import Colors from '../constants/Colors';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", minHeight: "300px"}} >
                    <Text style={styles.login} >Login</Text>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200}}
                        onChangeText={username => this.setState({username})}
                        placeholder="username"
                        value={this.state.username}
                    />

                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200}}
                        onChangeText={password => this.setState({password})}
                        secureTextEntry={true}
                        placeholder="password"
                        value={this.state.password}
                    />

                    <Button
                        style={styles.button}
                        title="Login"
                        onPress={(event) => this.validateLogin(event)}
                    />
            </View>
        );
    }

    validateLogin = (e) => {
        let validateusername = false;
        let validatePassword = false;

        //modify
        if(this.state.username === 'admin' && this.state.password === 'admin'){
            alert('admin');

        }else {
            alert('Wrong credentials');
            navigation.navigate('Hub')}
        }
}//end class


const styles = StyleSheet.create({
    loginWrapper: {
        backgroundColor: '#ccc'
    },
    container: {
        flex: 1,
        backgroundColor: '#ccc',
    },
    login: {
        fontSize: 18,
    },
    button: {
        color: Colors.mainColorThird,
    },

});
