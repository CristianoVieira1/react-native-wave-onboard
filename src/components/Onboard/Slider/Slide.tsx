import Color from "color";
import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import Svg, { Defs, RadialGradient, Rect, Stop } from "react-native-svg";
import * as S from "./styles";

const { width, height } = Dimensions.get("screen");

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
  const lighterColor = Color(color).lighten(0.8).toString();
  return (
    <>
      <Svg style={StyleSheet.absoluteFill}>
        <Defs>
          <RadialGradient id="gradient" cx="50%" cy="35%">
            <Stop offset="0%" stopColor={lighterColor} />
            <Stop offset="100%" stopColor={color} />
          </RadialGradient>
        </Defs>
        <Rect x={0} y={0} width={width} height={height} fill="url(#gradient)" />
      </Svg>
      <S.Container>
        {/* <Image source={picture} style={styles.image} /> */}
        <S.Image source={picture} />
        <S.Content>
          <S.Title>{title}</S.Title>
          <S.SubTitle>{description}</S.SubTitle>
        </S.Content>
      </S.Container>
    </>
  );
};

export default Slide;
