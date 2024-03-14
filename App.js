
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigators } from './src/navigations/StackNavigators';
import { AuthProvider } from './src/providers/AuthProvider';
import DrawerNavigators from './src/navigations/DrawerNavigators';



export default function App() {


  return (

    <>
      <StatusBar />
      <AuthProvider>
        <NavigationContainer>
          <DrawerNavigators />
        </NavigationContainer>
      </AuthProvider>
    </>

  );
}




