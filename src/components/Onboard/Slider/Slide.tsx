import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import Svg, { Defs, RadialGradient, Rect, Stop } from 'react-native-svg';
import { styles } from './styles';
import { lightenColor } from '../../../utils/styles/color';

const { width, height } = Dimensions.get('screen');

export interface SlideProps {
  slide: {
    color: string;
    title: string;
    description: string;
    picture: ReturnType<typeof require>;
  };
}

const Slide = ({
  slide: { picture, color, title, description },
}: SlideProps) => {
  const lighter = lightenColor(color, 0.8);

  return (
    <>
      <Svg style={StyleSheet.absoluteFill}>
        <Defs>
          <RadialGradient id="gradient" cx="50%" cy="35%">
            <Stop offset="0%" stopColor={lighter} />
            <Stop offset="100%" stopColor={color} />
          </RadialGradient>
        </Defs>
        <Rect x={0} y={0} width={width} height={height} fill="url(#gradient)" />
      </Svg>
      <View style={styles.container}>
        <Image source={picture} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{description}</Text>
        </View>
      </View>
    </>
  );
};

export default Slide;
