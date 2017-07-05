import React from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header, Button, CardSection, Spinner} from './components/common';
import LoginForm from './components/LoginForm';

class App extends React.Component {
  
  state = {
    loggedIn: null,
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDPiA3vT17htGoVuV1yTwshOzCyZmy3LmI",
      authDomain: "auth-test-d00a4.firebaseapp.com",
      databaseURL: "https://auth-test-d00a4.firebaseio.com",
      projectId: "auth-test-d00a4",
      storageBucket: "auth-test-d00a4.appspot.com",
      messagingSenderId: "241649520036"
    })
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        this.setState({loggedIn: true})
      }
      else {
        this.setState({loggedIn: false})
      }
    })
  }
  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
          </CardSection>
        )
      case false:
        return <LoginForm></LoginForm>
      default:
        return <Spinner size="large"></Spinner>
    }
  }
  render() {
    return (
      <View>
        <Header headerText="Auth"></Header>
        {this.renderContent()}
      </View>
    )
  }
}

export default App;
