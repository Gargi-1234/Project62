import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class RecordScreen extends React.Component {
  render() {
    return (
      <View>
        <View>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: 'red' }]}
            onPress={() => {
              this.props.navigation.navigate('AlexaRec');
            }}>
            <Text style={styles.buttonText}>Alexa</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: 'green' }]}
            onPress={() => {
              this.props.navigation.navigate('SiriRec');
            }}>
            <Text style={styles.buttonText}>Siri</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: 'blue' }]}
            onPress={() => {
              this.props.navigation.navigate('SophiaRec');
            }}>
            <Text style={styles.buttonText}>Sophia</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.buttons}
          onPress={() => this.props.navigation.navigate('HomeScreen')}>
          <Text style={{ fontSize: 20, color: 'black' }}>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 50,
    width: 200,
    height: 50,
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    margin: 10,
    marginTop: 50,
    marginLeft: 90,
    width: 160,
    height: 50,
  },
  buttonText: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
});
