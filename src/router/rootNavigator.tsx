import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { use } from 'react'
import GetStarted from '../screens/getStarted'
import Accounts from '../screens/accounts'
import { ACCOUNTS, CATEGORY_MOVIES, GET_STARTED, MOVIES, MOVİE_DETAIL, TABMENU } from '../utils/routes'
import TabNavigator from './tabNavigator'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from '../theme/colors'
import { Add, ArrowLeft2 } from 'iconsax-react-nativejs'
import { useNavigation } from '@react-navigation/native'
import Movies from '../screens/movies';
import MovieDetail from '../screens/movies/movieDetail';
import CategoryMovies from "../screens/categories/categoryMovies"

const Logo = require('../assets/images/logo.png');

const Stack = createNativeStackNavigator();

const RootNavigator: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: Colors.WHITE,
        headerBackTitle: "Back",
        headerStyle: {
          backgroundColor: Colors.BLACK,

        },
      }}
    >
      <Stack.Screen
        options={{
          headerShown: false
        }}
        name={GET_STARTED} component={GetStarted} />
      <Stack.Screen
        options={({ route }) => ({
          headerTitle: () => (
            <Image
              source={Logo}
              style={{ width: 180, height: 40, resizeMode: 'contain' }}
            />
          ),
          headerBackTitleVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ paddingHorizontal: 12, paddingVertical: 6 }}
              accessible={true}
              accessibilityLabel="Back"
            >
              <ArrowLeft2 size={28} color="#FFFFFF" />
            </TouchableOpacity>
          ),
          headerRight: ({ }) =>
          (<Add color={Colors.WHITE} size={30} />
          ),
        })}
        name={ACCOUNTS} component={Accounts} />
      <Stack.Screen
        options={{
          headerShown: false
        }}
        name={TABMENU} component={TabNavigator} />

      <Stack.Screen
       options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ paddingHorizontal: 12, paddingVertical: 6 }}
              accessible={true}
              accessibilityLabel="Back"
            >
              <ArrowLeft2 size={28} color="#FFFFFF" />
            </TouchableOpacity>
          ),
        }}
        name={MOVIES} component={Movies}
      />
      <Stack.Screen
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ paddingHorizontal: 12, paddingVertical: 6 }}
              accessible={true}
              accessibilityLabel="Back"
            >
              <ArrowLeft2 size={28} color="#FFFFFF" />
            </TouchableOpacity>
          ),
        }}
        name={MOVİE_DETAIL} 
        component={MovieDetail}
      />

      <Stack.Screen
       options={{
        headerTitle: () => (
            <Image
              source={Logo}
              style={{ width: 180, height: 40, resizeMode: 'contain' }}
            />
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ paddingHorizontal: 12, paddingVertical: 6 }}
              accessible={true}
              accessibilityLabel="Back"
            >
              <ArrowLeft2 size={28} color="#FFFFFF" />
            </TouchableOpacity>
          ),
        }}
      name={CATEGORY_MOVIES} component={CategoryMovies} />

    </Stack.Navigator>
  )
}

export default RootNavigator

const styles = StyleSheet.create({})