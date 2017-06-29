// Import a library to help create a Component
import React from 'react';
import {View, Text, AppRegistry} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => (
  <View style={{ flex:1 }}>
    <Header headerText={'Albums'}></Header>
    <AlbumList></AlbumList>
  </View>
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
