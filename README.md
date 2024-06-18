# `<Onboard />` [![npm](https://img.shields.io/npm/v/react-native-wave-onboard.svg)](https://www.npmjs.com/package/react-native-wave-onboard)

## Install

```bash
npm i react-native-wave-onboard
```

```bash
yarn add react-native-wave-onboard
```

## Usage

```js
import { Onboard } from 'react-native-wave-onboard';

<Onboard
  slides={[
    {
      color: '#FF5733',
      title: 'Welcome',
      description: 'Get started with our app',
      picture: <Image source={require('./images/circle.png')} />,
    },
    ...
  ]}
  onStartPress={() => {
    // TODO: Implement your function to redirect
  }}
/>
```

## Contributing

If you have a **question**, found a **bug** or want to propose a new **feature**, have a look at the [issues page](https://github.com/CristianoVieira1/react-native-wave-onboard/issues).

**Pull requests** are especially welcomed when they fix bugs or improve the code quality.

## License

MIT

---
