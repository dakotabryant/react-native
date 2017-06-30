import React from 'react';
import firebase from 'firebase';
import {TextInput, Text} from 'react-native';
import {Button, Card, CardSection, Input} from './common';

class LoginForm extends React.Component {
  state = {
    email: '',
    password: '',
    error: null
  }
  onButtonPress() {
    const {email, password} = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(() => {
        this.setState({error: 'Authentication Failed.'})
      })
    })
  }
  render() {
    return (
      <Card>
        <CardSection>
          <Input
             placeholder='user@gmail.com'
             label='Email'
             value={this.state.text}
             onChangeText={email => this.setState({email})}
           />
        </CardSection>
        <CardSection>
          <Input
            placeholder='password'
            label='Password'
            value={this.state.password}
            onChangeText={password => this.setState({password})}
            secureTextEntry
          />
        </CardSection>
        <Text>
          {this.state.error}
        </Text>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Log In</Button>
        </CardSection>
      </Card>
    )
  }
}

export default LoginForm;
