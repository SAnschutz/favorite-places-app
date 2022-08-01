import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllPlaces from './screens/AllPlaces'
import AddPlace from './screens/AddPlace'
import IconButton from './components/UI/IconButton';
import {Colors} from './constants/colors'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <>
    <StatusBar style='dark'/>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {backgroundColor: Colors.primary500},
        headerTintColor: Colors.gray700,
        contentStyle: {backgroundColor: Colors.gray700}
      }}>
        <Stack.Screen name="AllPlaces" component={AllPlaces} options={({navigation}) => ({ //turning options into a function that returns an object gives you access to props provided by ReactNative, like navigation.  If don't need, can just pass an object into options.
          headerRight: ({tintColor}) => <IconButton icon='add' size={24} color={tintColor} onPress={() => navigation.navigate('AddPlace')}/>,//likewise, turning headerRight into a function that returns an object gives you access to certain props provided by ReactNative, like tintColor
          title: 'Your Favorite Places'
        })}/>
        <Stack.Screen name="AddPlace" component={AddPlace} options={{
            title: "Add a New Place"
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}



// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import AllPlaces from './screens/AllPlaces';
// import AddPlace from './screens/AddPlace';

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <View>
//       <StatusBar style='dark' />
//       <NavigationContainer>
//         <Navigation>
//           <Stack.Screen name='AllPlaces' component={AllPlaces} />
//           <Stack.Screen name='AddPlace' component={AddPlace} />
//         </Stack.Navigation>
//       </NavigationContainer>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
