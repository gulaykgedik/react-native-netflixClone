import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CATEGORIES, HOME, SEARCH, PROFILE } from '../../utils/routes';
import { Category2, Home, Profile, SearchNormal } from 'iconsax-react-nativejs';
import { TabIconsProps } from '../../models/ui/tabIconsProps';

const TabBarIcon:React.FC<TabIconsProps> = ({ name, size, color, focused }) => {

    switch (name) {
        case HOME: return <Home size={25} color={color} variant={focused ? "Bold" : "Outline"} />
        case CATEGORIES: return <Category2 size={25} color={color} variant={focused ? "Bold" : "Outline"} />
        case SEARCH: return <SearchNormal size={25} color={color} variant={focused ? "Bold" : "Outline"} />
        case PROFILE: return <Profile size={25} color={color} variant={focused ? "Bold" : "Outline"} />
    }
}
export default TabBarIcon

const styles = StyleSheet.create({})