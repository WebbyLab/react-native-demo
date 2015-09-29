'use strict';

import React from 'react-native';
//import Autocomplete from 'react-native-autocomplete';

const {
    StyleSheet,
    Text,
    TextInput,
    View,
    AlertIOS
} = React;

export default class MapBox extends React.Component {

  static propTypes = {
    items: React.PropTypes.array.isRequired,
    displayingProp: React.PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
        displayedItems: []
    };
  }

  onTyping(text) {
        var countries = Countries.filter(function (country) {
            return country.name.toLowerCase().startsWith(text.toLowerCase())
        }).map(function (country) {
            return country.name;
        });

        this.setState({
            data:  countries
        });
    },

  render() {
    const {startPoint, endPoint} = this.props;

    const annotations = [];

    if (startPoint) {
        annotations.push({
            latitude: startPoint.latitude,
            longitude: startPoint.longitude,
            animateDrop: true,
            title: 'From',
            subtitle: startPoint.name,
            id: 'start'
        });
    }

    if (endPoint) {
        annotations.push({
            latitude: endPoint.latitude,
            longitude: endPoint.longitude,
            animateDrop: true,
            title: 'To',
            subtitle: endPoint.name,
            id: 'end'
        });
    }

    console.log(this.props);

    return (
      <View style={this.props.style} >
          <MapView
              style={styles.mapView}
              region={{
                latitude: startPoint ? startPoint.latitude : 0,
                longitude: startPoint ? startPoint.longitude : 0,
                latitudeDelta: 0.3,
                longitudeDelta: 0.3,
              }}
              annotations={annotations}
              showsUserLocation={annotations.length === 0}
            />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  mapView: {
    flex: 1,
  },
});
