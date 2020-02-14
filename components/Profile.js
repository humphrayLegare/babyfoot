import React from 'react'
import PropTypes from 'prop-types';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, TextInput, Button } from 'react-native';
import Tag from "./Tag"
import {ScrollView} from "react-native-gesture-handler";
import ProfileGameResult from '../components/ProfileGameResult'
import FooterNavigator from "../components/FooterNavigator";


export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username : "Ahmed Kadri",
            tag: 'solo'
        }
    }

    render() {
        return(
            <View style={styles.profileView}>
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                    <div className="profileWrapper" style={{margin: 'auto'}}>
                        <View>
                            <Image style={styles.userProfile} source={require('../assets/images/ahmed.jpeg')}/>
                            <h2>{this.state.username}</h2>
                        </View>

                    </div>
                    <div className="tagWrapper">
                        <div style={this.listStyle} className="btn-group">
                            <Tag name="solo" />
                            <Tag name="duo" />
                        </div>
                    </div>
                    <ProfileGameResult username={this.state.username} tag={this.state.tag}/>
                    <FooterNavigator />
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

ProfileGameResult.propTypes = {
    username: PropTypes.string
};


const styles = StyleSheet.create({

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
    // ulTag: {
    //     listStyleType: 'none',
    //
    // }
});
