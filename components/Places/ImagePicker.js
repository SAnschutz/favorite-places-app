import {View, Button, Alert} from 'react-native';
import { launchCameraAsync, useCameraPermissions, PermissionStatus } from 'expo-image-picker'

function ImagePicker (){
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
      console.log(image)
    }

    return <View>
        <View>

        </View>
        <Button title="Take Image" onPress={takeImageHandler}/>
    </View>

}

export default ImagePicker;

//expo Camera can use if need a more heavy-duty camera application.
//expo ImagePicker provides access to the system UI for picking photos and also for opening the camera if necessary