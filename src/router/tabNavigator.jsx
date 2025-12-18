import { Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native'
import React, { use } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Search from '../screens/search';
import Profile from '../screens/profile';
import { ACCOUNTS, CATEGORIES, GET_STARTED, HOME, PROFILE } from '../utils/routes';
import { SEARCH } from '../utils/routes';
import Categories from '../screens/categories';
import TabBarIcon from '../components/router/tabBarIcon';
import Colors from '../theme/colors';
import { SearchNormal } from 'iconsax-react-nativejs';
import { useNavigation } from '@react-navigation/native';


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    const navigation = useNavigation();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ size, focused, color }) =>
                (<TabBarIcon
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
                }
            })}
        >
            <Tab.Screen
                name={HOME}
                component={Home}
                options={{
                    header: () => (
                        <SafeAreaView style={{ backgroundColor: "black" }}>
                            <View
                                style={{
                                    paddingHorizontal: 15,
                                    paddingTop: 10,
                                    paddingBottom: 15,
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    backgroundColor: "black"
                                }}
                            >
                                {/* Netflix Logo */}
                               <TouchableOpacity onPress={() => navigation.navigate(GET_STARTED)}>
                               <Image
                                    source={require("../assets/images/smallLogo.png")}
                                    style={{ width: 30, height: 30, resizeMode: "contain" }}
                                />
                               </TouchableOpacity>

                                <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>

                                    {/* Search Icon */}
                                    <TouchableOpacity>
                                        <SearchNormal size="24" color="white" />
                                    </TouchableOpacity>

                                    {/* User Icon */}
                                    <TouchableOpacity onPress={() => navigation.navigate(ACCOUNTS)}>
                                        <Image
                                            source={require("../assets/images/user3.png")}
                                            style={{ width: 24, height: 24, resizeMode: "cover" }}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </SafeAreaView>
                    ),
                }}
            />
            <Tab.Screen
            options={{
               headerTitle:"",
                headerTitleStyle: false
            }} name={CATEGORIES} component={Categories} />
            <Tab.Screen name={SEARCH} component={Search} />
            <Tab.Screen name={PROFILE} component={Profile} />
        </Tab.Navigator>

    )
}

export default TabNavigator

const styles = StyleSheet.create({})