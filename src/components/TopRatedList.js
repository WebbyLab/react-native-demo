'use strict';

import React from 'react-native';
import {top} from './../data/data';
import palette  from './../styles/palette';
import TopRatedItem from './TopRatedItem';
import ReviewsPage from './ReviewsPage';


const {
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  SwitchIOS,
  ListView
} = React;

export default class TopRatedList extends React.Component {

  static propTypes = {
    data: React.PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.renderOrderItem = this.renderOrderItem.bind(this);
    this.selectRow       = this.selectRow.bind(this);

    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
      dataSource: dataSource.cloneWithRows(top)
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderOrderItem}
          style={styles.listView}
        />
       </View>
    );
  }

  renderOrderItem(item) {
    return (
      <TopRatedItem
        item={item}
        onRowSelect={this.selectRow}
      />
    );
  }

  selectRow(item) {
    this.props.navigator.push({
      component: ReviewsPage,
      title: 'Reviews',
      passProps: { item },
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  title: {
    fontSize: 22,
    color: 'black'
  },

  listView: {
    backgroundColor: palette.backgroundColor,
  }
});