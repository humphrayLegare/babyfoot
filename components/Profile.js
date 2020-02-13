import React from 'react'
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, TextInput, Button } from 'react-native';
import Tag from "./Tag"
import {ScrollView} from "react-native-gesture-handler";
import ProfileGameResult from '../components/ProfileGameResult'


export default class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username : "John Doe",
            tag: 'solo'
        }
    }

    render() {
        return(
            <View style={styles.profileView}>
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                    <div class="profileWrapper">
                        <Image style={styles.userProfile} source={require('../assets/images/ahmed.jpeg')}/>
                        <p>{this.state.username}</p>
                        <div class="tagWrapper">
                            <ul>
                                <Tag name="solo" />
                                <Tag name="duo" />
                            </ul>
                        </div>
                    </div>
                    <ProfileGameResult username={this.state.username} tag={this.state.tag}/>
                </ScrollView>
            </View>
        )
    }
}

ProfileGameResult.propTypes = {
    username: PropTypes.string
};


const styles = StyleSheet.create({

    contentContainer: {
        minHeight:300,
        width: '100%',
    },

    profileView: {
        flex: 1,
        backgroundColor: "red"
    },
    userProfile: {
        borderRadius:40,
        width:80,
        height:80
    }
});
