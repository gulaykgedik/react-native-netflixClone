import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';

import Home from '../screens/home';
import Search from '../screens/search';
import Profile from '../screens/profile';
import Categories from '../screens/categories';

import {
  ACCOUNTS,
  CATEGORIES,
  GET_STARTED,
  HOME,
  PROFILE,
  SEARCH,
} from '../utils/routes';

import TabBarIcon from '../components/router/tabBarIcon';
import Colors from '../theme/colors';
import HeaderRight from '../components/router/headerRight';

const Tab = createBottomTabNavigator();

const TabNavigator: React.FC = () => {
  const navigation = useNavigation<any>();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ size, focused, color }) => (
          <TabBarIcon
            name={route.name}
            color={color}
            size={size}
            focused={focused}
          />
        ),
        tabBarActiveTintColor: Colors.WHITE,
        tabBarInactiveTintColor: Colors.WHITE,
        tabBarStyle: {
          backgroundColor: Colors.BLACK,
        },
        headerStyle: {
          backgroundColor: Colors.BLACK,
        },
        headerTitleStyle: {
          color: Colors.WHITE,
        },
      })}
    >
      {/* HOME */}
      <Tab.Screen
        name={HOME}
        component={Home}
        options={{
          header: () => (
            <SafeAreaView
              style={{
                backgroundColor: Colors.BLACK,
                paddingTop:
                  Platform.OS === 'android'
                    ? StatusBar.currentHeight
                    : 0,
              }}
            >
              <View style={styles.headerContainer}>
                {/* Logo */}
                <TouchableOpacity
                  onPress={() => navigation.navigate(GET_STARTED)}
                >
                  <Image
                    source={require('../assets/images/smallLogo.png')}
                    style={styles.logo}
                  />
                </TouchableOpacity>

                {/* Right Icons */}
                <View style={styles.rightIcons}>
                  <HeaderRight />

                  <TouchableOpacity
                    onPress={() => navigation.navigate(ACCOUNTS)}
                  >
                    <Image
                      source={require('../assets/images/user3.png')}
                      style={styles.userIcon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </SafeAreaView>
          ),
        }}
      />

      {/* CATEGORIES */}
      <Tab.Screen
        name={CATEGORIES}
        component={Categories}
        options={{
          headerTitle: '',
        }}
      />

      {/* SEARCH */}
      <Tab.Screen name={SEARCH} component={Search} />

      {/* PROFILE */}
      <Tab.Screen name={PROFILE} component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 15,
    paddingBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.BLACK,
  },
  logo: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  userIcon: {
    width: 25,
    height: 25,
    resizeMode: 'cover',
  },
});
