import * as React from 'react';
import { Component } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, TextInput, Button } from 'react-native';
import 'bootstrap/dist/css/bootstrap.min.css';
import {faTrophy, faVolleyballBall, faFlushed} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'


//colors
import Colors from '../constants/Colors';
import {ScrollView} from "react-native-gesture-handler";

export default class FooterNavigator extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", minHeight: "300px"}} >
                <div style={{display: 'flex'}}>
                    <FontAwesomeIcon icon={ faVolleyballBall } />
                    <Button
                        style={styles.button}
                        title="Hub"
                        onPress={(e) => {
                            window.location.href = 'Hub'
                        }}
                    />
                    <FontAwesomeIcon icon={ faFlushed } />
                    <Button
                        style={styles.button}
                        title="Profile"
                        onPress={(e) => {
                            window.location.href = 'Profile'
                        }}
                    />
                </div>
            </View>
        );
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
