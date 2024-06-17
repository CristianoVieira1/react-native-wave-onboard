import React from 'react';

interface SlideProps {
  color: string;
  title: string;
  description: string;
  picture: ReturnType<typeof require>;
}

export interface OnboardProps {
  slides?: SlideProps[];
  onStartPress?: () => void;
}

declare const Onboard: React.FC<OnboardProps>;

export default Onboard;
