import * as React from 'react';
import { ImageBackground, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import Login from '../components/Login';
import Colors from '../constants/Colors';
import { MonoText } from '../components/StyledText';
import {NavigationContainer} from '@react-navigation/native';
import trophy from '../assets/images/trophy.png';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import Top from '../components/Top';
import TopTeam from '../components/TopTeam';
import FooterNavigator from "../components/FooterNavigator";

export default class Hub extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: 'Ahmed Kadri',
            tag: 'solo'
        }
    }


    render(){
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                    <View style={styles.divContainer}>
                        <Top name={this.state.username}/>
                        <TopTeam name={this.state.username}/>
                    </View>
                    <View>
                        <FooterNavigator style={styles.FooterNavigator}/>
                    </View>
                </ScrollView>
            </View>
        );
    }

}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    contentContainer: {
        minHeight:300,
    },

    divContainer: {
        backgroundColor: '#fff'
    },
    FooterNavigator: {
        flex:1
    }
});
