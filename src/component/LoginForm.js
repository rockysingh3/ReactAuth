import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';


class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  // gets user input and stores it in the state
  handleChangeText = (typedText) => {
    this.setState({ text: typedText });
  }


  render() {
    return (
      <Card>
        <CardSection />
          <Input
            label="Email"
            value={this.state.text}
            onChangeText={this.handleChangeText}
           />
        <CardSection />

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
