'use strict';

import React from 'react-native';
import {results} from './../data/docs';
import palette  from './../styles/palette';

const {
  StyleSheet,
  Text,
  Image,
  View,
} = React;

export default class SearchResultItem extends React.Component {

  static propTypes = {
    item: React.PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {item} = this.props;

    return (
       <View style={styles.container}>
            <View style={styles.data}>
                <Image
                    style={styles.avatar}
                    source={{uri: item.avatar}}
                  />
                  <View style={styles.dataContainer}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.route}>{item.from} - {item.to}</Text>
                        <Text style={styles.car}>{item.car}</Text>
                        <Text style={styles.time}>{item.time}</Text>
                  </View>
            </View>

              <View style={styles.priceContainer}>
                    <Text style={styles.price}>{item.price}</Text>
              </View>

       </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: palette.borderColor
  },

  data: {
        flexDirection: 'row',
        alignItems: 'center'
  },

  dataContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between'
  },

  name: {
    fontSize: 22
  },

  route: {
    fontSize: 16,
    fontWeight: 'bold',
    color: palette.accentColor
  },

  car: {
    fontSize: 16,
    color: palette.textColor
  },

  time: {
    fontSize: 16,
    fontWeight: '200',
    color: palette.secondaryTextColor
  },

  priceContainer: {
    padding: 10
  },

  price: {
    fontSize: 56,
    fontWeight: '200',
    color: palette.accentColor
  },

  avatar: {
    width: 100,
    margin: 10,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: palette.borderColor
  }

});