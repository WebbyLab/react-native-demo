'use strict';

import React from 'react-native';

const {
  StyleSheet,
  View,
  MapView,
} = React;

export default class MapBox extends React.Component {

  static propTypes = {
    startPoint: React.PropTypes.object,
    endPoint: React.PropTypes.object
  }

  constructor(props) {
    super(props);

    this.state = {};
  }

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
  }
});
