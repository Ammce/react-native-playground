import React, { Component } from 'react';
import { Platform, StyleSheet, Button, TextInput, Text, View, Image } from 'react-native';

//Importing important elements
import UserProfiles from './components/UserProfile';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {

  state = {
    name: '',
    surname: ''
  }

  handleSubmit = () => {
    alert(this.state.name)
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      name: e.target.value
    });
  }


  render() {
    let imageSource = { uri: "https://avatars3.githubusercontent.com/u/19955658?s=460&v=4" }
    let name = this.state.name
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
          <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
          <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
        </View>
        <View>
          <Button title="Potvrdi" onPress={this.handleSubmit} />
          <Text style={styles.welcome}>Welcome to React, {name}!</Text>
          <TextInput value={this.state.name} onChange={this.handleChange} placeholder={"Enter your name here"} />
          <Image style={styles.imageProfile} source={imageSource} />
          <UserProfiles name={"name"} surname={"surname"} />
          <UserProfiles name={"Faruk"} surname={"Brunkoglu"} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 50,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  imageProfile: {
    width: 200,
    height: 200
  }
});
