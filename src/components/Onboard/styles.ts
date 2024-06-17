import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    zIndex: 10,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 20,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonSkip: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
    padding: 20
  },
  buttonSkipText: {
    fontSize: 18,
  }
});

export { styles }
