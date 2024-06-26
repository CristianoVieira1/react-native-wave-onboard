# `<Onboard />`

[![npm](https://img.shields.io/npm/v/react-native-wave-onboard.svg)](https://www.npmjs.com/package/react-native-wave-onboard)

<h1 align="center">
  <img alt="Logo" src="https://github.com/CristianoVieira1/react-native-wave-onboard/blob/master/src/assets/screen.png" width="180px">
</h1>

## Install

Make sure you have installed the following dependencies before using `react-native-wave-onboard`:

- [@react-native-community/masked-view](https://github.com/react-native-masked-view/masked-view)
- [react-native-animatable](https://github.com/oblador/react-native-animatable)
- [react-native-redash](https://github.com/wcandillon/react-native-redash)
- [react-native-gesture-handler](https://github.com/software-mansion/react-native-gesture-handler)
- [react-native-reanimated](https://github.com/software-mansion/react-native-reanimated)

```bash
npm install @react-native-community/masked-view react-native-animatable react-native-redash react-native-gesture-handler react-native-reanimated
```

```bash
yarn add @react-native-community/masked-view react-native-animatable react-native-redash react-native-gesture-handler react-native-reanimated
```

After installing the dependencies, you can proceed with installing `react-native-wave-onboard`:

```bash
npm install react-native-wave-onboard
```

```bash
yarn add react-native-wave-onboard
```

## Usage

```js
import React from 'react';
import { View, Image } from 'react-native';
import { Onboard } from 'react-native-wave-onboard';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Onboard
        slides={[
          {
            color: '#FF5733',
            title: 'Welcome',
            description: 'Get started with our app',
            picture: <Image source={require('./images/circle.png')} />,
          },
          // Add more slides as needed
        ]}
        language="Enter the desired language" // 'ptBR' | 'en' | 'es' | 'fr' | 'de' | 'it' | 'ru' | 'ja' | 'ko' | 'zhCN' | 'ar'
        onStartPress={() => {
          // TODO: Implement your function to redirect
        }}
      />
    </View>
  );
};

export default App;
```

## Props

### `Onboard` Component Props

- `slides?: SlideProps[]`: Array of slides to be displayed in the onboard. Each slide should conform to `SlideProps`.
- `onStartPress?: () => void`: Callback function invoked when the start button is pressed.
- `language?: 'ptBR' | 'en' | 'es'`: Language for the onboard interface.

## Contributing

If you have a **question**, found a **bug** or want to propose a new **feature**, have a look at the [issues page](https://github.com/CristianoVieira1/react-native-wave-onboard/issues).

**Pull requests** are especially welcomed when they fix bugs or improve the code quality.

## 📝 License

This project is licensed under the MIT License - see file [LICENSE](LICENSE) for details.

---

Feito com 💜 por Cristiano Borges 👋 [linkedin](https://www.linkedin.com/in/cristianobv/) ,
Daniel Marques 👋 [linkedin](https://www.linkedin.com/in/danmarquesdev/) ,
Gabriel Rocha  👋 [linkedin](https://www.linkedin.com/in/gabriel-rocha-508b62b1/) ,


