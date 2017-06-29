import React from 'react';
import {TextInput} from 'react-native';
import {Button, Card, CardSection} from './common';

class LoginForm extends React.Component {
  state = {
    text: ''
  }
  render() {
    return (
      <Card>
        <CardSection>
          <TextInput value={this.state.text} onChangeText={(text) => this.setState({text})} style={{width: 100}}></TextInput>
        </CardSection>
        <CardSection>
          <TextInput style={{width: 100}}></TextInput>
        </CardSection>
        <CardSection>
          <Button>Log In</Button>
        </CardSection>
      </Card>
    )
  }
}

export default LoginForm;
