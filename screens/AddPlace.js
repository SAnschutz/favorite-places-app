import { StyleSheet } from 'react-native';
import PlaceForm from '../components/Places/PlaceForm';

function AddPlace({navigation}) {//any component that's registered as a screen automatically gets navigation as a prop -- no need to import anything!
  function createPlaceHandler(place){
    navigation.navigate('AllPlaces', {place})
  }
  return <PlaceForm onCreatePlace={createPlaceHandler}/>;
}

export default AddPlace;

const styles = StyleSheet.create({});
