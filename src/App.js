import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './component/common';
import LoginForm from './component/LoginForm';

class App extends Component {

  componentWillMount(){
    firebase.initializeApp({
      apiKey: 'AIzaSyDyfDmzyS7PBf7yGMCPOk6zvLbOsnyW21I',
      authDomain: 'auth-fc091.firebaseapp.com',
      databaseURL: "https://auth-fc091.firebaseio.com",
      projectId: "auth-fc091",
      storageBucket: "auth-fc091.appspot.com",
      messagingSenderId: "1018571346490"
    });
  }



  render() {
    return (
      <View>
      <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}


export default App;
