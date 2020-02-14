import React from 'react'
import { Modal, Image, Platform, StyleSheet, Text, TouchableOpacity, View, TextInput, Button } from 'react-native';
import { makeServer } from '../server'

export default class ProfileGameResult extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            username: this.props.username,
            tag: this.props.tag,
            totalWinSolo: 22,
            totalWinDuo: 73,
            modalVisible: false,
        }
    }

    componentDidMount() {
        this.getWin('solo');
        this.getWin('Duo');
    }

    getWin = (tag) => {
        let results = {};
        if(tag === 'solo'){
            results = window.fetch('/api/users', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then((response) => {response.json()})
                .then((json) => {console.log(json)});

            // this.setState({tag: `results.${tag}`})
            // console.log(results);
        }
    };

    getResults = () => {
        return (
        [
            {id:1, predicateWon: true, otherPlayer: 'Charles Gauhtier', mainPlayerScore: 8, otherPlayerScore: 5},
            {id:2, predicateWon: true, otherPlayer: 'Dominique Leclerc', mainPlayerScore: 5, otherPlayerScore: 9},
            {id:3, predicateWon: false, otherPlayer: 'Clementin', mainPlayerScore: 8, otherPlayerScore: 5},
            {id:4, predicateWon: false, otherPlayer: 'Alexandre Limoge', mainPlayerScore: 8, otherPlayerScore: 5},
            {id:5, predicateWon: true, otherPlayer: 'Charles Gauhtier', mainPlayerScore: 2, otherPlayerScore: 9},
        ])
    }


    getTeams = () => {
        return (
            [
                {id:1, teamName:'The beauty and The Beast', firstPlayer: this.state.username, secondPlayer: 'Cesar', totalWin: 12},
                {id:2, teamName:'Montreal Beasts', firstPlayer: this.state.username, secondPlayer: 'Alexandre Limoge', totalWin: 6},
                {id:3, teamName:'Show me Your Ball', firstPlayer: this.state.username, secondPlayer: 'Philippe Gilbert', totalWin: 5},
            ])
    }


    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }





    render(){
        let solo = this.state.totalWinSolo;
        let duo = this.state.totalWinDuo;

        let results = this.getResults().reverse().map((item) => {
            return (
                <li  key={item.id} className={ item.mainPlayerScore > item.otherPlayerScore ? "alert alert-success" : 'alert alert-danger'}>
                    <span>{item.id} </span>
                    <span>Score: {item.mainPlayerScore} : {item.otherPlayerScore}</span>
                    <span>against: {item.otherPlayer}</span>
                </li>
            )
        });

        let teams = this.getTeams().map((item) => {
            return (
                <div className="jumbotron-fluid" >
                    <h6>{item.teamName}</h6>
                    <span>Partner: {item.secondPlayer}</span>
                    <h6>Wins: {item.totalWin}</h6>
                </div>
            )
        });


        return(
            <View>
                <div className="jumbotron">
                    {/*<Modal*/}
                    {/*    animationType="slide"*/}
                    {/*    transparent={false}*/}
                    {/*    visible={this.state.modalVisible}*/}
                    {/*    onRequestClose={() => {*/}
                    {/*        Alert.alert('Modal has been closed.');*/}
                    {/*    }}>*/}

                    <div style={{display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
                        <div>
                            <h2>Total solo: {solo} </h2>
                        </div>
                        <div>
                            <h2> Total duo: {duo}</h2>
                        </div>
                    </div>
                    <div className="results">
                        <div style={{display: 'flex'}}>
                            <ul className="list-group">
                                {results}
                            </ul>
                        </div>
                    </div>

                    <h3><span>Your teams </span><i className="badge badge-info">{teams.length}</i></h3>
                    {teams}
                    <Button onPress={() => {this.setModalVisible(!this.state.modalVisible)}}  title="+"/>

                    {/*</Modal>*/}
                </div>
            </View>


        )
    }


}


const styles = StyleSheet.create({

});
