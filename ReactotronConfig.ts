import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

Reactotron.setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from // controls connection & communication settings
  .configure() // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!

// https://github.com/infinitered/reactotron/issues/298#issuecomment-265441918
const ogConsoleLog = console.log;
const ogConsoleError = console.error;

console.log = (...args) => {
  ogConsoleLog(...args);
  Reactotron.display({
    name: 'CONSOLE.LOG',
    value: args,
    preview: args.length > 0 && typeof args[0] === 'string' ? args[0] : null,
  });
};

console.error = (...args) => {
  ogConsoleError(...args);
  Reactotron.display({
    name: 'CONSOLE.ERROR',
    value: args,
    preview: args.length > 0 && typeof args[0] === 'string' ? args[0] : null,
  });
};
