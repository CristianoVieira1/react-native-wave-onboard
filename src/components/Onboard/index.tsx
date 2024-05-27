import React, {useState} from 'react';
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
  slides?: SlideProps[]; // tornando slides opcional
  onStartPress?: () => void;
}

const Onboard: React.FC<OnboardProps> = ({slides = [], onStartPress}) => {
  const [index, setIndex] = useState(0);
  const prev = slides[index - 1];
  const next = slides[index + 1];

  return (
    <>
      <Slider
        key={index}
        index={index}
        setIndex={setIndex}
        prev={prev && <Slide slide={prev} />}
        next={next && <Slide slide={next} />}>
        <Slide slide={slides[index]!} />
        {index === slides.length - 1 ? (
          <S.Container>
            <Animatable.View
              animation={'bounceInUp'}
              useNativeDriver
              duration={3000}>
              <S.Content>
                <Animatable.View
                  animation={'pulse'}
                  useNativeDriver
                  iterationCount={'infinite'}>
                  <S.Button onPress={onStartPress}>
                    <S.ButtonText>Iniciar</S.ButtonText>
                  </S.Button>
                </Animatable.View>
              </S.Content>
            </Animatable.View>
          </S.Container>
        ) : (
          <></>
        )}
      </Slider>
    </>
  );
};

export default Onboard;
