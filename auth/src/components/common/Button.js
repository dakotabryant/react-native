import React from 'react'
import {Text, TouchableOpacity} from 'react-native'

const Button = (props) => {
  const {buttonStyle, textStyle} = styles;
  return (
    <TouchableOpacity onPress={props.onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {props.children}
      </Text>
    </TouchableOpacity>
  )
}

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
   buttonStyle: {
     flex: 1,
     alignSelf: 'stretch',
     backgroundColor: '#007aff',
     borderRadius: 2,
     marginRight: 5,
     marginLeft: 5,
     elevation: 3
   }
}

export {Button};
