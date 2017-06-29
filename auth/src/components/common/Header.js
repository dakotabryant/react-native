import React from 'react';
import {Text, View} from 'react-native';

const Header = props => {
  const {textStyle, viewStyle} = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  )
}

const styles = {
  viewStyle: {
    backgroundColor: '#555555',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    elevation: 5,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,
    color: 'white'
  }
}

export {Header};
