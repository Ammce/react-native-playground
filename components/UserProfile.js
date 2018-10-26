import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class UserProfiles extends Component {
    state = {
        displayData: false
    }

    componentDidMount() {
        setInterval(() => {
            this.setState(prevState => {
                return {
                    displayData: !prevState.displayData
                }
            })
        }, 1000);
    }

    render() {
        let displayIT = null;
        if (this.state.displayData === true) {
            displayIT = <View >
                <Text style={styles.name}>Hello there user: {this.props.name}</Text>
                <Text>Your surname is: {this.props.surname}</Text>
            </View>
        }
        return (
            <View style={styles.backgroundComp}>
                {displayIT}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    name: {
        color: "red"
    },
    backgroundComp: {
        backgroundColor: "green",
    }
})