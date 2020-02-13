import React from 'react'
import PropTypes from 'prop-types';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, TextInput, Button } from 'react-native';
import Tag from "./Tag"
import {ScrollView} from "react-native-gesture-handler";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'


export default class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username : "John Doe",
            tag: 'solo'
        }
    }



    getSoloTop3 = () => {
        return (
            [
                {id:1, playerName: 'John Doe', totalSoloWin: 22},
                {id:2, playerName: 'charles Gauthier', totalSoloWin: 20},
                {id:3, playerName: 'Pierre Boivin', totalSoloWin: 16}
            ]
        )

    }

    render() {

        let trophyColors = ['#ffc107', 'silver', '#ff9933'];
        let soloTop3 = this.getSoloTop3().map((item) => {
            return (
                <p>
                    <span><FontAwesomeIcon icon={ faTrophy } style={{color: trophyColors[item.id - 1]}}/></span><span>{item.id} </span>
                    <span>{item.playerName}</span>
                    <span className="badge badge-success"> Win: {item.totalSoloWin}</span>
                </p>
            )
        })


        return(
            <View style={styles.profileView}>
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                    <h1>Welcome to the hub</h1>
                    <h3>Top players</h3>
                    {soloTop3}
                </ScrollView>
            </View>
        )
    }
}

const listStyle = {
    'display': 'block',
    'list-style-type': 'none',
    'align': 'center',
    'margin': 'auto',
}



const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#fff',
    },

    contentContainer: {
        flex: 1,
        minHeight:300,
        width: '100%',
    },

    profileView: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 50,
        minHeight: 200,
    },
    userProfile: {
        borderRadius:40,
        width:80,
        height:80,
        align: 'center',
        margin: 'auto',
    },

});
