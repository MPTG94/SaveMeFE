import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ImageDetail = ({imageSource, imageStars, title}) => {
    return <View>
        <Image source={imageSource} />
        <Text>Image of a {title}</Text>
        <Text>Image has a score of {imageStars}</Text>
    </View>
};

const styles = StyleSheet.create({});

export default ImageDetail;