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
            username : "Ahmed Kadri",
            tag: 'solo'
        }
    }



    getDuoTop3 = () => {
        return (
            [
                {id:1, teamName:'The beauty and The Beast', firstPlayer: this.state.username, secondPlayer: 'Cesar', totalWin: 12},
                {id:2, teamName:'Montreal Beasts', firstPlayer: this.state.username, secondPlayer: 'Alexandre Limoge', totalWin: 6},
                {id:3, teamName:'Show me Your Ball', firstPlayer: this.state.username, secondPlayer: 'Philippe Gilbert', totalWin: 5},
            ]
        )

    }

    render() {

        let trophyColors = ['#ffc107', 'silver', '#ff9933'];

        let duoTop3 = this.getDuoTop3().map((item) => {
            return (
                <p key={item.id}>
                    <span><FontAwesomeIcon icon={ faTrophy } style={{color: trophyColors[item.id - 1]}}/></span><span>{item.id} </span>
                    <span className="badge badge-info">{item.teamName}</span>
                    <span>{item.firstPlayer}</span><span>{item.secondPlayer}</span>
                    <span className="badge badge-success"> Win: {item.totalWin}</span>
                </p>
            )
        })


        return(
            <View style={styles.profileView}>
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                    <h3>Top team</h3>
                    {duoTop3}
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
