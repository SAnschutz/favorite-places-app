import { StyleSheet } from 'react-native';
import PlaceForm from '../components/Places/PlaceForm';
import { insertPlace } from '../util/database';

function AddPlace({ navigation }) {
  //any component that's registered as a screen automatically gets navigation as a prop -- no need to import anything!
  async function createPlaceHandler(place) {
    await insertPlace(place);
    navigation.navigate('AllPlaces');
  }
  return <PlaceForm onCreatePlace={createPlaceHandler} />;
}

export default AddPlace;

const styles = StyleSheet.create({});
