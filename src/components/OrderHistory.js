'use strict';

import React from 'react-native';
import {history} from './../data/data';
import palette  from './../styles/palette';
import OrderItem from './OrderItem';

const {
    StyleSheet,
    Text,
    TextInput,
    Image,
    View,
    SwitchIOS,
    ListView
} = React;

export default class OrderHistory extends React.Component {
    static propTypes = {
        data: React.PropTypes.object.isRequired,
    };

    constructor(props) {
        super(props);

        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });

        this.state = {
            dataSource: dataSource.cloneWithRows(history)
        };
    }

    render() {
        return (
           <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderOrderItem}
                    style={styles.listView} />
           </View>
        );
    }

    renderOrderItem(item) {
        return (
            <OrderItem item={item} />
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