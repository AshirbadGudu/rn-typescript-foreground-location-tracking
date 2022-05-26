import {Box, Button, Heading} from 'native-base';
import React from 'react';
import {Alert, PermissionsAndroid, Platform} from 'react-native';
import RNLocation from 'react-native-location';
import ReactNativeForegroundService from '@supersami/rn-foreground-service';

RNLocation.configure({
  distanceFilter: 5.0,
});

const askForLocationPermission = async () => {
  try {
    const isGranted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_BACKGROUND_LOCATION,
    );

    if (isGranted !== PermissionsAndroid.RESULTS.GRANTED)
      return Alert.alert(
        'Location Permission Denied',
        'Please visit setting page to allow location permission',
      );
    RNLocation.requestPermission({
      android: {
        detail: 'coarse',
      },
    }).then(granted => {
      if (granted) {
        RNLocation.getLatestLocation()
          .then(location => {
            console.log(location?.latitude, location?.longitude);
          })
          .catch(e => {
            console.log(e);
          });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

ReactNativeForegroundService.add_task(() => askForLocationPermission(), {
  delay: 1000,
  onLoop: true,
  taskId: 'taskid',
  onError: (e: any) => console.log(`Error logging:`, e),
});

export default function Home() {
  return (
    <Box p="4">
      <Button onPress={askForLocationPermission}>Ask For Permission</Button>
    </Box>
  );
}
