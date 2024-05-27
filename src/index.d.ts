import React from 'react';

export interface SlideProps {
  color: string;
  title: string;
  description: string;
  picture: any;
}

export interface OnboardProps {
  slides?: SlideProps[];
  onStartPress?: () => void;
}

declare const Onboard: React.FC<OnboardProps>;

export default Onboard;
