import React, { useState } from 'react';
import * as Animatable from 'react-native-animatable';
import Slider from './Slider';
import Slide from './Slider/Slide';
import { styles } from './styles';
import { View, Text, TouchableOpacity } from 'react-native';
import { getTranslation } from '../../utils/translation';

interface SlideProps {
  color: string;
  title: string;
  description: string;
  picture: any;
}

interface OnboardProps {
  slides?: SlideProps[];
  onStartPress?: () => void;
  language?: 'ptBR' | 'en' | 'es'
}

const Onboard: React.FC<OnboardProps> = ({ slides = [], onStartPress, language = 'ptBR' }) => {
  const [index, setIndex] = useState(0);

  const prevSlider = slides[index - 1];
  const nextSlider = slides[index + 1];

  function handleSkip() {
    setIndex(slides.length - 1);
  };

  return (
    <>
      <Slider
        key={index}
        index={index}
        setIndex={setIndex}
        prev={prevSlider && <Slide slide={prevSlider} />}
        next={nextSlider && <Slide slide={nextSlider} />}
      >
        <>
          <Slide slide={slides[index]!} />
          {index === slides.length - 1 && (
            <View style={styles.container}>
              <Animatable.View
                animation={'bounceInUp'}
                useNativeDriver
                duration={3000}
              >
                <View style={styles.content}>
                  <Animatable.View
                    animation={'pulse'}
                    useNativeDriver
                    iterationCount={'infinite'}
                  >
                    <TouchableOpacity onPress={onStartPress} style={styles.button}>
                      <Text style={styles.buttonText}>{getTranslation(language, 'start')}</Text>
                    </TouchableOpacity>
                  </Animatable.View>
                </View>
              </Animatable.View>
            </View>
          )}
        </>
      </Slider>

      {index < slides.length - 1 && (
        <TouchableOpacity onPress={handleSkip} style={styles.buttonSkip}>
          <Text style={styles.buttonSkipText}>{getTranslation(language, 'skip')}</Text>
        </TouchableOpacity>
      )}
    </>
  );
};

export default Onboard;
