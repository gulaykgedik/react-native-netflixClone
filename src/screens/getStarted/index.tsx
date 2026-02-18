import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
  Platform,
  Linking,
} from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import messaging from '@react-native-firebase/messaging';
import { useDispatch } from 'react-redux';

import Button from '../../components/ui/button';
import { ACCOUNTS } from '../../utils/routes';
import { AppDispatch } from '../../store/store';
import { addNewNotification } from '../../store/slices/notificationSlice';
import { addNotificationDatabase, getNotifications } from '../../store/actions/notificationActions';

const GetStarted: React.FC = () => {
  const navigation = useNavigation<any>();
  const dispatch: AppDispatch = useDispatch();

  const requestPermission = async () => {
    try {
      // ---------- ANDROID ----------
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
          {
            title: 'Notification Permission',
            message: 'This app needs access to your notifications',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          const token = await messaging().getToken();
          console.log('FCM Token (Android):', token);
        } else {
          console.log('Notification permission denied (Android)');
        }
      }

      // ---------- IOS ----------
      else {
        const authStatus = await messaging().requestPermission();
        const enabled =
          authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
          authStatus === messaging.AuthorizationStatus.PROVISIONAL;

        if (!enabled) {
          console.log('Notification permission denied (iOS)');
          return;
        }

        // 🔴 iOS için ZORUNLU
        if (!messaging().isDeviceRegisteredForRemoteMessages) {
          await messaging().registerDeviceForRemoteMessages();
        }

        const token = await messaging().getToken();
        console.log('FCM Token (iOS):', token);
      }
    } catch (error) {
      console.log('FCM permission/token error:', error);
    }
  };

  useEffect(() => {
    dispatch(getNotifications());
    requestPermission();

    const unsubscribe = messaging().onMessage(async remoteMessage => {
      dispatch(
        addNewNotification({
          id: remoteMessage.messageId || Math.random().toString(),
          title: remoteMessage.notification?.title || 'No Title',
          body: remoteMessage.notification?.body || 'No Body',
          receivedAt: new Date().toISOString(),
          show: false,
          senTime: remoteMessage.sentTime || Date.now(),
          data: remoteMessage.data || {},
        }),
      );

      dispatch(addNotificationDatabase({
        id: remoteMessage.messageId || Math.random().toString(),
        title: remoteMessage.notification?.title || 'No Title',
        body: remoteMessage.notification?.body || 'No Body',
        receivedAt: new Date().toISOString(),
        show: false,
        senTime: remoteMessage.sentTime || Date.now(),
        data: remoteMessage.data || {},
      }));
    });

    messaging().getInitialNotification().then(remoteMessage => {
      if (remoteMessage?.data?.link && typeof remoteMessage.data.link === 'string') {
        Linking.openURL(remoteMessage.data.link);
      }
    });

    messaging().onNotificationOpenedApp(remoteMessage => {
      if (remoteMessage?.data?.link && typeof remoteMessage.data.link === 'string') {
        Linking.openURL(remoteMessage.data.link);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <ImageBackground
      source={require('../../assets/images/getStarted.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <Image
        source={require('../../assets/images/backImage.png')}
        style={styles.background}
        resizeMode="cover"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Unlimited entertainment, one low price.
        </Text>
        <Text style={styles.description}>
          All of Netflix, starting at just £149.
        </Text>

        <Button
          title="GET STARTED"
          fullWidth
          onPress={() => navigation.navigate(ACCOUNTS)}
        />
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  content: {
    height: 200,
    width: '100%',
    bottom: 0,
    padding: 20,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    width: '80%',
    textAlign: 'center',
  },
  description: {
    color: 'white',
    fontSize: 16,
    marginTop: 8,
    width: '80%',
    textAlign: 'center',
  },
});
