'use strict';

import React    from 'react-native';

import DocIndex from './components/DocIndex';
import SearchResults from './components/SearchResults';

import palette  from './styles/palette.js';

const {
  NavigatorIOS,
  View,
  Text,
  StyleSheet,
  TabBarIOS,
} = React;

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 'searchTab'
    };
  }

  _renderContent(pageText: string, component: object) {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          component: component,
          title: pageText,
          passProps: {},
        }}
      />
    );
  }

  render() {
    return (
      <TabBarIOS
        tintColor={palette.accentColor}
        barTintColor="white">

        <TabBarIOS.Item
          title="Blue Tab"
          systemIcon="history"
          selected={this.state.selectedTab === 'historyTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'historyTab',
            });
          }}>
          {this._renderContent('History', SearchResults)}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'searchTab'}
          systemIcon="search"
          onPress={() => {
            this.setState({
              selectedTab: 'searchTab',
            });
          }}>
          {this._renderContent('Search', DocIndex)}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'topRatedTab'}
          systemIcon="top-rated"
          onPress={() => {
            this.setState({
              selectedTab: 'topRatedTab',
            });
          }}>
          {this._renderContent('Tranding', SearchResults)}
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
});