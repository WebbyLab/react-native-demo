'use strict';

import React        from 'react-native';

import MapBox       from './MapBox';
import Button       from 'react-native-button';
import ParallaxView from 'react-native-parallax-view';

import {cities}     from './../data/data';
import palette      from './../styles/palette';

const {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  SwitchIOS,
  TouchableOpacity,
  AlertIOS
} = React;

export default class OrderPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      startPoint: null,
      endPoint: null
    };
  }

  render() {
    const {order} = this.props;

    const HeaderComponent = (
        <View style={styles.header}>
            <Image
                style={styles.avatar}
                source={{uri: order.avatar}}
              />
              <Text style={styles.name}>
                {order.name}
            </Text>
        </View>
    );

    return (
        <ParallaxView
          ref={component => this._scrollView = component}
          backgroundSource={{ uri: order.carPhoto }}
          windowHeight={300}
          header={HeaderComponent}>
          <View style={styles.view}>
            <Text style={styles.dest}>
                {order.from} - {order.to}
            </Text>

            <Text style={styles.time}>
                {order.time}
            </Text>

            <Text style={styles.comment}>
                {order.comment}
            </Text>
            <MapBox
              style={styles.mapBox}
            />
            <Button
              style={styles.button}
              activeOpacity={0.7}
              onPress={this.handleBuy.bind(null, order)}>
              Order
            </Button>
        </View>
      </ParallaxView>
    );
  }

  handleBuy(order) {
    AlertIOS.alert(
        'Confirm payment',
        `Pay ${order.price} for this trip with your card **** 3456`,
        [
            {text: 'Cancel'},
            {text: 'Pay'}
        ]
    );
  }
}


const styles = StyleSheet.create({
  container: {
    marginTop: 80,
  },

  view: {
    paddingHorizontal: 10,
    paddingVertical: 6
  },

  dest: {
    color: palette.textColor,
    fontSize: 30,
    alignSelf: 'center'
  },

  header: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },

  name: {
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
    alignSelf: 'center'
  },

  time: {
    fontSize: 14,
    alignSelf: 'center',
    fontWeight: '200',
    color: palette.secondaryTextColor
  },

  car: {
    color: palette.textColor,
    fontSize: 16,
    fontWeight: '500',
    alignSelf: 'center'
  },

  comment: {
    width: 300,
    alignSelf: 'center',
    padding:10,
    margin: 10,
    borderLeftWidth: 3,
    borderColor: palette.accentColor
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
  },

  avatar: {
    width: 120,
    margin: 10,
    height: 120,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: palette.borderColor
  }
});
