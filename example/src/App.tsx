import * as React from 'react';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Onboard, type SlideProps } from 'react-native-wave-onboarding';

const onboardItems: SlideProps[] = [
  {
    color: '#FF5733',
    title: 'Welcome',
    description: 'Get started with our app',
    picture: require('../assets/1.png'),
  },
  {
    color: '#33FF57',
    title: 'Features',
    description: 'Explore the amazing features',
    picture: require('../assets/2.png'),
  },
  {
    color: '#3357FF',
    title: 'Get Started',
    description: 'Create an account to begin',
    picture: require('../assets/3.png'),
  },
];

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Onboard
        slides={onboardItems}
        onStartPress={() => {
          //
        }}
      />
    </GestureHandlerRootView>
  );
}
