import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
} from 'react-native';
import db from '../config';

export default class AlexaRec extends React.Component {
  constructor() {
    super();
    this.state = {
      blackSt: 0,
      goldSt: 0,
      subD: 0,
      subP: 0,
      gA: 0,
      gB: 0,
      gC: 0,
      gD: 0,
      gF: 0,
    };
  }
  blackStCount = () => {
    this.setState({ blackSt: this.state.blackSt + 1 });
  };
  goldStCount = () => {
    this.setState({ goldSt: this.state.goldSt + 1 });
  };
  subDCount = () => {
    this.setState({ subD: this.state.subD + 1 });
  };
  subPCount = () => {
    this.setState({ subP: this.state.subP + 1 });
  };
  gACount = () => {
    this.setState({ gA: this.state.gA + 1 });
  };
  gBCount = () => {
    this.setState({ gB: this.state.gB + 1 });
  };
  gCCount = () => {
    this.setState({ gC: this.state.gC + 1 });
  };
  gDCount = () => {
    this.setState({ gD: this.state.gD + 1 });
  };
  gFCount = () => {
    this.setState({ gF: this.state.gF + 1 });
  };
  render() {
    return (
      <View style={styles.container}>


        <View style={styles.ratingContainer}>
          <Text style={{ textAlign: 'center', margin: 5, fontWeight: 'bold' }}>
            Discipline
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 20,
            }}>
            <Text>{this.state.blackSt}</Text>
            <Text>{this.state.goldSt}</Text>
          </View>
          <TouchableOpacity onPress={this.blackStCount}>
            <Image
              style={{
                width: 50,
                height: 50,
                marginLeft: 5,
              }}
              source={require('../assets/blackSt.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.goldStCount}>
            <Image
              style={{
                width: 50,
                height: 50,
                marginTop: -50,
                marginLeft: 130,
              }}
              source={require('../assets/goldSt.png')}
            />
          </TouchableOpacity>
        </View>


        <View style={styles.ratingContainer}>
          <Text style={{ textAlign: 'center', margin: 5, fontWeight: 'bold' }}>
            Submissions
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 20,
            }}>
            <Text>{this.state.subD}</Text>
            <Text>{this.state.subP}</Text>
          </View>
          <TouchableOpacity onPress={this.subDCount}>
            <Image
              style={{
                width: 50,
                height: 50,
                marginLeft: 5,
              }}
              source={require('../assets/tick.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.subPCount}>
            <Image
              style={{
                width: 50,
                height: 50,
                marginTop: -50,
                marginLeft: 130,
              }}
              source={require('../assets/cross.png')}
            />
          </TouchableOpacity>
        </View>

        
          <View style={styles.ratingContainer}>
          <Text style={{ textAlign: 'center', margin: 5, fontWeight: 'bold' }}>
            Grades
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 20,
            }}>
            <Text style={{ textAlign: 'center', marginLeft: 5}}>{this.state.gA}</Text>
            <Text style={{ textAlign: 'center', marginLeft: 45}}>{this.state.gB}</Text>
            <Text style={{ textAlign: 'center', marginLeft: 45}}>{this.state.gC}</Text>
            <Text style={{ textAlign: 'center', marginLeft: 45}}>{this.state.gD}</Text>
            <Text style={{ textAlign: 'center', marginLeft: 45}}>{this.state.gF}</Text>
          </View>
          <TouchableOpacity onPress={this.gACount}>
            <Image
              style={{
                width: 35,
                height: 35,
                marginLeft: 10,
              }}
              source={require('../assets/gA.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.gBCount}>
            <Image
              style={{
                width: 35,
                height: 35,
                marginTop: -35,
                marginLeft: 65,
              }}
              source={require('../assets/gB.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.gCCount}>
            <Image
              style={{
                width: 35,
                height: 35,
                marginTop: -35,
                marginLeft: 120,
              }}
              source={require('../assets/gC.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.gDCount}>
            <Image
              style={{
                width: 35,
                height: 35,
                marginTop: -35,
                marginLeft: 175,
              }}
              source={require('../assets/gD.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.gFCount}>
            <Image
              style={{
                width: 35,
                height: 35,
                marginTop: -35,
                marginLeft: 230,
              }}
              source={require('../assets/gF.png')}
            />
          </TouchableOpacity>
        </View>


        <TouchableOpacity
          style={styles.buttons}
          onPress={() => this.props.navigation.navigate('RecordScreen')}>
          <Text style={{ fontSize: 20, color: 'black' }}>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    margin: 10,
    marginTop: 50,
    width: 160,
    height: 50,
  },
  ratingContainer: {
    alignSelf: 'center',
    marginTop: 20,
  },
});
