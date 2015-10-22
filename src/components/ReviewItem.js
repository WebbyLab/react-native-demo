'use strict';

import React     from 'react-native';

import palette   from './../styles/palette';

const {
  StyleSheet,
  Text,
  Image,
  View
} = React;

export default class ReviewItem extends React.Component {

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
        <View style={styles.content}>
        <View style={styles.data}>
          <Image
            style={styles.avatar}
            source={{uri: item.authorAvatar}}
          />
          <View style={styles.dataContainer}>
            <Text style={styles.name}>{item.author}</Text>
            <Text style={styles.car}>{item.text}</Text>
            <Text style={styles.time}>{item.time}</Text>
          </View>
        </View>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{item.rate}★</Text>
          </View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: palette.borderColor
  },

  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    fontSize: 20
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
    fontSize: 40,
    fontWeight: '200',
    color: palette.accentColor
  },

  avatar: {
    width: 80,
    margin: 10,
    height: 80,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: palette.borderColor
  }
});