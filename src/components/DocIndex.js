'use strict';

import React from 'react-native';
import MapBox from './MapBox';
import Switch from './Switch';
import {cities} from './../data/docs';
import Button from 'react-native-button';
import palette  from './../styles/palette';
import SearchResults from './SearchResults';


const {
  StyleSheet,
  Text,
  TextInput,
  View,
  SwitchIOS
} = React;

export default class DocIndex extends React.Component {

  static propTypes = {
    docs: React.PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      startPoint: cities[0],
      endPoint: cities[1],

    };
  }

  render() {
    return (
      <View style={styles.container}>
          <TextInput
            placeholder={'From'}
            style={styles.input}
          />

          <TextInput
            placeholder={'To'}
            style={styles.input}
          />

          <Switch
            label={'Via main roads'}
            onTintColor={palette.accentColor}
            onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
            style={{marginBottom: 10}}
            value={this.state.falseSwitchIsOn}
          />

          <MapBox
            style={styles.mapBox}
            startPoint={this.state.startPoint}
            endPoint={this.state.endPoint}
          />

          <Button style={styles.button} activeOpacity={0.7} onPress={this.handleSearch}>
            Search for compamions
          </Button>
      </View>
    );
  }

  handleSearch() {
    const title = `${this.state.startPoint.name} - ${this.state.endPoint.name}`;
    this.props.navigator.push({
        component: SearchResults,
        title: title,
        passProps: { from: this.state.startPoint, to: this.state.endPoint },
    });
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
  },

  input: {
    alignSelf: 'stretch',
    margin: 10,
    height: 40,
    fontSize: 18,
    borderRadius: 2,
    padding: 5,
    borderWidth: 1,
    borderColor: '#dddddd'
  },

  button: {
    color: 'white',
    backgroundColor: palette.accentColor,
    alignSelf: 'stretch',
    padding: 13,
    width: 400,
    fontSize: 20,
    borderRadius: 2,
    margin: 10
  },

  mapBox: {
    height: 200,
    margin: 10,
    alignSelf: 'stretch',
  }

});