import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';

export class Header extends React.Component {
  constructor(props) {
    super(props);
    const headerName = this.props;
    this.state = {
      headerName: headerName.headerText,
    };
  }
  render() {
    const { headerName } = this.state

    return (
      <View style = {styles.viewStyle}>
        <Text style = {styles.textStyle}>{headerName}</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  viewStyle: {
    height: 70,
    paddingTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    shadowColor: '#000',
    shadowOffset: {width: 0,height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 20,
  }
});