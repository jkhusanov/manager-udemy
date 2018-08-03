import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export class Card extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {children } = this.props
    return (
      <View style={styles.containerStyle}>
        { children }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#DDD',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginHorizontal: 5,
    marginVertical: 10,
  }
});