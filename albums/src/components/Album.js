import React from 'react';
import {View, Text, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
// import Button from './Button';

const Album = (props) => {
  const {title, artist, image, url, thumbnail_image} = props.album
  const {textContainerStyles, thumbnailStyles, thumbnailContainerStyles, albumTextStyle, albumArtworkStyles} = styles
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyles}>
          <Image style={thumbnailStyles} source={{
            uri: thumbnail_image
          }}/>
        </View>
        <View style={textContainerStyles}>
          <Text style={albumTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image style={albumArtworkStyles} source={{
          uri: image
        }}></Image>
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>Buy '{title}' Now</Button>
      </CardSection>
    </Card>
  )
};

const styles = {
  textContainerStyles: {
    justifyContent: 'space-around'
  },
  albumTextStyle: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  thumbnailStyles: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyles: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  albumArtworkContainer: {},
  albumArtworkStyles: {
    height: 300,
    flex: 1,
    width: null
  }
}
export default Album;
