import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';


class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }


  render() {
    return (
      <Card>
        <CardSection />
          <Input
            placeHolder="Enter your email"
            label="Email"
            value={this.state.text}
            onChangeText={email => this.setState({ email })}
          />
        <CardSection>
          <Input
            secureTextEntry
            placeHolder="enter your password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <CardSection>
            <Button>
              Log in
            </Button>
        </CardSection>
      </Card>
    );
  }
}


export default LoginForm;
