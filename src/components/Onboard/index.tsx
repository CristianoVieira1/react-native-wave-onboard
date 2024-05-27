import React, { useState } from 'react';
import * as Animatable from 'react-native-animatable';
import Slider from './Slider';
import Slide from './Slider/Slide';
import * as S from './styles';

interface SlideProps {
  color: string;
  title: string;
  description: string;
  picture: any;
}

interface OnboardProps {
  slides?: SlideProps[];
  onStartPress?: () => void;
}

const Onboard: React.FC<OnboardProps> = ({ slides = [], onStartPress }) => {
  const [index, setIndex] = useState(0);
  const prevSlider = slides[index - 1];
  const nextSlider = slides[index + 1];
  const currentSlide = slides[index];

  return (
    <>
      <Slider
        key={index}
        index={index}
        setIndex={setIndex}
        prev={prevSlider}
        next={nextSlider}
      >
        <>
          <Slide slide={currentSlide!} />
          {index === slides.length - 1 && (
            <S.Container>
              <Animatable.View
                animation={'bounceInUp'}
                useNativeDriver
                duration={3000}
              >
                <S.Content>
                  <Animatable.View
                    animation={'pulse'}
                    useNativeDriver
                    iterationCount={'infinite'}
                  >
                    <S.Button onPress={onStartPress}>
                      <S.ButtonText>Iniciar</S.ButtonText>
                    </S.Button>
                  </Animatable.View>
                </S.Content>
              </Animatable.View>
            </S.Container>
          )}
        </>
      </Slider>
    </>
  );
};

export default Onboard;
