import {useState} from 'react'
import {View, Button, Alert, Image, Text, StyleSheet} from 'react-native';
import { launchCameraAsync, useCameraPermissions, PermissionStatus } from 'expo-image-picker'
import { Colors } from '../../constants/colors';

function ImagePicker (){
    const [pickedImage, setPickedImage] = useState()
    const [cameraPermissionInformation, requestPermission] = useCameraPermissions()

    async function verifyPermissions(){
        if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED){
            const permissionResponse = await requestPermission();
            return permissionResponse.granted;
        }
        if (cameraPermissionInformation.status === PermissionStatus.DENIED){
            Alert.alert('Please grant app permission to use camera')
            return false;
        }

        return true;

    }

    async function takeImageHandler(){
        const hasPermission = await verifyPermissions()

        if (!hasPermission){
            return;
        }

      const image =  await launchCameraAsync({
          allowsEditing: true,
          aspect: [16, 9],
          quality: 0.5 //to not get really big images
      });
      setPickedImage(image.uri)
    }

    let imagePreview = <Text>No image</Text>

    if (pickedImage) {
        imagePreview = <Image style={styles.image} soure={{uri: pickedImage}}/>
    }

    return <View>
        <View style={styles.imagePreview}> 
{imagePreview}
        </View>
        <Button title="Take Image" onPress={takeImageHandler}/>
    </View>

}

export default ImagePicker;

const styles = StyleSheet.create({
    imagePreview: {
        wdth: '100%',
        height: 200,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary100,
        borderRadius: 4
    },
    image: {
        width: '100%',
        height: '100%'
    }
})

//expo Camera can use if need a more heavy-duty camera application.
//expo ImagePicker provides access to the system UI for picking photos and also for opening the camera if necessary