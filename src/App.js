'use strict';

import React    from 'react-native';

import SearchPage from './components/SearchPage';
import OrdersList from './components/OrdersList';

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

    renderContent(pageTitle: string, component: object) {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
                    component: component,
                    title: pageTitle,
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
                    {this.renderContent('History', OrdersList)}
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'searchTab'}
                    systemIcon="search"
                    onPress={() => {
                        this.setState({
                            selectedTab: 'searchTab',
                        });
                    }}>
                    {this.renderContent('Search', SearchPage)}
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'topRatedTab'}
                    systemIcon="top-rated"
                    onPress={() => {
                        this.setState({
                            selectedTab: 'topRatedTab',
                        });
                    }}>
                    {this.renderContent('Tranding', OrdersList)}
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
    }
});