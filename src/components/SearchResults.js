'use strict';

import React from 'react-native';
import {results} from './../data/docs';
import palette  from './../styles/palette';
import SearchResultItem from './SearchResultItem';


const {
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  SwitchIOS,
  ListView
} = React;

export default class SearchResults extends React.Component {

  static propTypes = {
    docs: React.PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    const dataSource = new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
        dataSource: dataSource.cloneWithRows(results)
    };
  }

  render() {
    return (
       <View style={styles.container}>
            <Text style={styles.title}> {this.props.from.name} - {this.props.to.name} </Text>
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderSearchResultItem}
                style={styles.listView}
              />
       </View>
    );
  }

  renderSearchResultItem(item) {
    return (
        <SearchResultItem
            item={item}
        />
    );
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