import React from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header} from './components/common';
import LoginForm from './components/LoginForm';

class App extends React.Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDPiA3vT17htGoVuV1yTwshOzCyZmy3LmI",
      authDomain: "auth-test-d00a4.firebaseapp.com",
      databaseURL: "https://auth-test-d00a4.firebaseio.com",
      projectId: "auth-test-d00a4",
      storageBucket: "auth-test-d00a4.appspot.com",
      messagingSenderId: "241649520036"
    })
  }
  render() {
    return (
      <View>
        <Header headerText="Auth"></Header>
        <LoginForm></LoginForm>
      </View>
    )
  }
}

export default App;
