import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { getTranslation } from '../../utils/translation';
import Slider from './Slider';
import Slide from './Slider/Slide';
import { styles } from './styles';

export interface SlideProps {
  color: string;
  title: string;
  description: string;
  picture: ReturnType<typeof require>;
}

interface OnboardProps {
  slides?: SlideProps[];
  onStartPress?: () => void;
  language?: 'ptBR' | 'en' | 'es' | 'fr' | 'de' | 'it' | 'ru' | 'ja' | 'ko' | 'zhCN' | 'ar';
}

const Onboard: React.FC<OnboardProps> = ({
  slides = [],
  onStartPress,
  language = 'ptBR',
}) => {
  const [index, setIndex] = useState(0);

  const prevSlider = slides[index - 1];
  const nextSlider = slides[index + 1];

  function handleSkip() {
    setIndex(slides.length - 1);
  }

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
                    <TouchableOpacity
                      onPress={onStartPress}
                      style={styles.button}
                    >
                      <Text style={styles.buttonText}>
                        {getTranslation(language, 'start')}
                      </Text>
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
          <Text style={styles.buttonSkipText}>
            {getTranslation(language, 'skip')}
          </Text>
        </TouchableOpacity>
      )}
    </>
  );
};

export default Onboard;
