import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllPlaces from './screens/AllPlaces'
import AddPlace from './screens/AddPlace'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <>
    <StatusBar style='dark'/>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AllPlaces" component={AllPlaces}/>
        <Stack.Screen name="AddPlace" component={AddPlace}/>
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
//         <Stack.Navigation>
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
