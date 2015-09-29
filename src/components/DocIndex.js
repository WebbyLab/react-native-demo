'use strict';

import React from 'react-native';
import MapBox from './MapBox';
import Switch from './Switch';
import {cities} from './../data/docs';
import Button from 'react-native-button';
import palette  from './../styles/palette';
import SearchResults from './SearchResults';
import AutocompleteTextInput from './AutocompleteTextInput';


const {
  StyleSheet,
  Text,
  TextInput,
  View,
  SwitchIOS
} = React;

export default class DocIndex extends React.Component {

  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
    this.handleStartPointSelect = this.handleStartPointSelect.bind(this);
    this.handleEndPointSelect = this.handleEndPointSelect.bind(this);

    this.state = {
      startPoint: null,
      endPoint: null,

    };
  }

  handleStartPointSelect(item) {
      this.setState({
        ...this.state,
        startPoint: item
      });
  }

  handleEndPointSelect(item) {
      this.setState({
        ...this.state,
        endPoint: item
      });
  }

  render() {
    return (
      <View style={styles.container}>
          <AutocompleteTextInput
            items={cities}
            disabled={this.state.falseSwitchIsOn}
            displayingProp='name'
            placeholder='From'
            onSelect={this.handleStartPointSelect}
          />

          <AutocompleteTextInput
            items={cities}
            displayingProp='name'
            placeholder='To'
            onSelect={this.handleEndPointSelect}
          />

          <Switch
            label={'From my current location'}
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
            Search
          </Button>
      </View>
    );
  }

  handleSearch() {
    const {startPoint, endPoint} = this.state;
    const title = startPoint && endPoint ? `${this.state.startPoint.name} - ${this.state.endPoint.name}` : 'Search results';
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