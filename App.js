import React, {Component} from 'react';
import AppNavigator from './AppNavigator';
import NavigationService from './NavigationService';
import {YellowBox} from 'react-native';

YellowBox.ignoreWarnings(['']);

class App extends Component {
  render() {
    console.log('App.js launched');
    return (
      <AppNavigator
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
          console.log('ref', navigatorRef);
        }}
        uriPrefix={'https://'}
        enableURLHandling={true}
      />
    );
  }
}

export default App;
