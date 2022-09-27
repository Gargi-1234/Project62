import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AppHeader from './components/AppHeader';
import HomeScreen from './screens/HomeScreen';
import SummaryScreen from './screens/SummaryScreen';
import RecordScreen from './screens/RecordScreen';
import AlexaRec from './screens/AlexaRec';
import SiriRec from './screens/SiriRec';
import SophiaRec from './screens/SophiaRec';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppHeader />
        <AppContainer />
      </View>
    );
  }
}
var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  SummaryScreen: SummaryScreen,
  RecordScreen: RecordScreen,
  AlexaRec: AlexaRec,
  SiriRec: SiriRec,
  SophiaRec: SophiaRec,
});

const AppContainer = createAppContainer(AppNavigator);
