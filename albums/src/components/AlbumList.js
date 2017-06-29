import React, {Component} from 'react';
import {ScrollView, Text} from 'react-native';
import Album from './Album';

class AlbumList extends Component {

  state = {
      albums: [],
      brian: ''
    }

  componentDidMount(){
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => {
      return response.json();
    })
    .then(data => {
      return this.setState({
        albums: data
      })
    })
  }
  renderAlbums() {
    return this.state.albums.map(album => <Album key={album.title} album={album}/>)
  }
  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
