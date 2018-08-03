import React from 'react'
import { View, TextInput, Text, StyleSheet } from 'react-native';

export class Input extends React.Component {
  constructor(props) {
    super(props)

  }
  render() {
    const { containerStyle, labelStyle, inputStyle} = styles
    const { value, onChangeText, placeholder, autoCorrect, autoCapitalize, secureTextEntry, keyboardType } = this.props
    return (
      <View style = {containerStyle}>
        <Text style = {labelStyle}>
          {this.props.label}
        </Text>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          style={inputStyle}
          autoCorrect={autoCorrect}
          placeholder={placeholder}
          autoCapitalize= {autoCapitalize} 
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelStyle: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 20,
  },
  inputStyle: {
    flex: 2,
    paddingVertical: 5,
    fontSize: 18,
    lineHeight: 23,
    color: '#000'
  }

})