/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import Router from './src/navigation/Router';

import { Amplify } from 'aws-amplify';
import {
  useAuthenticator,
  withAuthenticator,
} from '@aws-amplify/ui-react-native';;

const App = () => {
  return(
    <>
      <StatusBar barStyle={'default'} />
      <Router/>
    </>

  );
};

export default withAuthenticator(App);
