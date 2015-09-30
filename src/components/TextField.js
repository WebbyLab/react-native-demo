'use strict';

import React        from 'react-native';

const {
    StyleSheet,
    Text,
    TextInput,
    View,
    AlertIOS
} = React;

export default class TextField extends React.Component {

  static propTypes = {
    items: React.PropTypes.array.isRequired,
    displayingProp: React.PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);

    this.onSelect = this.onSelect.bind(this);
    this.state = {
        displayedText: ''
    };
  }

    onSelect(text) {
        this.setState({
          displayedText: text
        });

        const selectedItem = this.props.items.find((item) => item[this.props.displayingProp] === text);
        if (selectedItem) {
          this.props.onSelect(selectedItem);
        }
    }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.autocomplete}
          placeholder={this.props.placeholder}
          editable={this.props.disabled}
          onChangeText={this.onSelect}
          value={this.state.displayedText}
        />
    </View>
    );
  }
}

const styles = StyleSheet.create({
    autocomplete: {
      alignSelf: 'stretch',
      fontSize: 18,
      borderRadius: 2,
      padding: 5,
      borderWidth: 1,
      borderColor: '#dddddd',
      height: 40,
      margin: 10,
    },

    container: {
      flex: 1,
    }
});
