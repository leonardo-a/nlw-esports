import { useRef, useEffect } from 'react'
import { StatusBar } from "react-native";
import { Subscription } from 'expo-modules-core'
import * as Notifications from 'expo-notifications'

import { Background } from "./src/components/Background";
import { Home } from './src/screens/Home'

import { Loading } from "./src/components/Loading";
import { Routes } from "./src/routes";

import { 
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter'

import './src/service/notificationsConfig';
import { getPushNotificationToken } from './src/service/getPushNotificationToken';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  })

  const getNotificationListener = useRef<Subscription>()

  const responseNotificationListener = useRef<Subscription>()

  useEffect( () => {
    getPushNotificationToken()
  })

  useEffect( () => {
    getNotificationListener.current = Notifications.addNotificationReceivedListener(
      notification => {
        console.log(notification);
      });
    
    responseNotificationListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    })

    return () => {
      if(getNotificationListener.current && responseNotificationListener.current){
        Notifications.removeNotificationSubscription(getNotificationListener.current);
        Notifications.removeNotificationSubscription(responseNotificationListener.current);
      }
    }
  } )

  return (
    <Background>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor="transparent"
        translucent
      />
      {
        fontsLoaded ? <Routes /> : <Loading />
      }
    </Background>
  );
}


