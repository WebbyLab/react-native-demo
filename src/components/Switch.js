'use strict';

import React from 'react-native';

const {
    StyleSheet,
    View,
    Text,
    SwitchIOS,
} = React;

export default class Switch extends React.Component {

    static propTypes = {
        startPoint: React.PropTypes.object,
        endPoint: React.PropTypes.object
    }

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.view} >
                <Text style={styles.text}> {this.props.label} </Text>
                <SwitchIOS {...this.props} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        justifyContent: 'space-between'
    },

    text: {
        fontSize: 18
    }
});
