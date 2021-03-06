import React from 'react';
import firebase from 'firebase';
import {TextInput, Text} from 'react-native';
import {Button, Card, CardSection, Input, Spinner} from './common';

class LoginForm extends React.Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false
  }
  onButtonPress() {
    const {email, password} = this.state;
    this.setState({error: '', loading: true})


    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(this.onLoginSucces.bind(this))
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(this.onLoginSucces.bind(this))
      .catch(this.onLoginFailure.bind(this))
    })
  }
  onLoginSucces() {
    this.setState({ 
      email: '', 
      password: '', 
      error: '', 
      loading: false
    })
  }
  onLoginFailure() {
    this.setState({error: 'Authentication Failed.', loading: false})
  }
  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small"></Spinner>
    }
    return <Button onPress={this.onButtonPress.bind(this)}>Log In</Button>
  }
  render() {
    return (
      <Card>
        <CardSection>
          <Input
             placeholder='user@gmail.com'
             label='Email'
             value={this.state.email}
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
        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>
        <CardSection>         
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default LoginForm;
