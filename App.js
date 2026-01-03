import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';

import TabNavigator from './navigator/TabNavigator';

enableScreens(false);

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" backgroundColor='#000' />
      <NavigationContainer theme={DarkTheme}>
        <TabNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
