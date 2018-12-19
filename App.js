/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform} from 'react-native';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import reducers from './src/reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './src/Router';
//import LoginForm from './src/components/LoginForm';
//import Header from './src/components/common/Header';
//import LibraryList from './src/components/LibraryList';




const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
}); 


export default class App extends Component{
 
 componentWillMount()
 {
  const config = {
    apiKey: 'AIzaSyDsj-kuWPHEXA3u36ZnV940Tt7rM0SuS1s',
    authDomain: 'manager-d0afb.firebaseapp.com',
    databaseURL: 'https://manager-d0afb.firebaseio.com',
    projectId: 'manager-d0afb',
    storageBucket: 'manager-d0afb.appspot.com',
    messagingSenderId: '913959258084'
  };
  firebase.initializeApp(config);
 }

  render() {
    const store=createStore(reducers,{},applyMiddleware(ReduxThunk));
    return (
             
              <Provider store={store}>
              <Router/>
              </Provider> 
               
                
    );
  }
}


